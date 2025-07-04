# Multi-stage Dockerfile para produção
FROM node:18-alpine AS frontend-builder

# Build do frontend React
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci --only=production
COPY frontend/ ./
RUN npm run build

FROM node:18-alpine AS api-builder

# Build da API Express
WORKDIR /app/api
COPY api/package*.json ./
RUN npm ci --only=production
COPY api/ ./
# Remover build se não necessário, apenas copiar código
# RUN npm run build

FROM python:3.11-slim AS python-deps

# Instalar dependências Python
WORKDIR /app/flask-api
COPY flask-api/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Imagem final de produção
FROM python:3.11-slim

# Instalar Node.js e PostgreSQL client
RUN apt-get update && apt-get install -y \
    curl \
    gnupg \
    postgresql-client \
    nginx \
    supervisor \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# Criar diretórios de trabalho
WORKDIR /app

# Copiar dependências Python
COPY --from=python-deps /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# Copiar API Express (código fonte em vez de build)
COPY --from=api-builder /app/api ./api
# Garantir que node_modules esteja presente
RUN cd /app/api && npm install

# Copiar Flask API
COPY flask-api/ ./flask-api/
# Instalar dependências Flask
RUN cd /app/flask-api && pip install -r requirements.txt

# Copiar frontend buildado
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

# Configurar Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Configurar Supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Criar script de inicialização
COPY ./docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Criar diretório de logs
RUN mkdir -p /app/logs

# Configurar permissões
RUN chown -R root:root /app && chmod -R 755 /app

# Expor portas
EXPOSE 80 3000 5000

# Definir variáveis de ambiente
ENV NODE_ENV=production
ENV FLASK_ENV=production
ENV DATABASE_URL=postgresql://postgres:123456@postgres:5432/infra_switchs_db

# Comando de inicialização
CMD ["/usr/local/bin/docker-entrypoint.sh"]