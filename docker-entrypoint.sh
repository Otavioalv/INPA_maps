#!/bin/bash
set -e

# Criar diretório de logs
mkdir -p /app/logs

# Aguardar o PostgreSQL ficar disponível
echo "Aguardando PostgreSQL..."
while ! pg_isready -h postgres -p 5432 -U postgres; do
    echo "PostgreSQL não está pronto - aguardando..."
    sleep 2
done

echo "PostgreSQL está pronto!"

# Verificar se as tabelas existem, se não, criar
echo "Verificando estrutura do banco..."
PGPASSWORD=123456 psql -h postgres -U postgres -d infra_switchs_db -c "
SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public'
    AND table_name = 'building_info_tb'
);" | grep -q 't' || {
    echo "Criando tabela building_info_tb..."
    PGPASSWORD=123456 psql -h postgres -U postgres -d infra_switchs_db -c "
    CREATE TABLE building_info_tb (
        id SERIAL PRIMARY KEY,
        qtd_sw INTEGER,
        build_name VARCHAR(200),
        build_number INTEGER,
        lnglat VARCHAR(50),
        switchs TEXT
    );"
    echo "Tabela criada com sucesso!"
}

# Verificar se os arquivos principais existem
echo "Verificando arquivos da aplicação..."

# Verificar Express API
if [ ! -f "/app/api/server.js" ] && [ ! -f "/app/api/index.js" ] && [ ! -f "/app/api/dist/server.js" ]; then
    echo "ERRO: Arquivo principal da API Express não encontrado!"
    echo "Procurado: /app/api/server.js, /app/api/index.js, /app/api/dist/server.js"
    ls -la /app/api/
    exit 1
fi

# Verificar Flask API
if [ ! -f "/app/flask-api/app.py" ]; then
    echo "ERRO: Arquivo app.py da Flask API não encontrado!"
    echo "Conteúdo do diretório flask-api:"
    ls -la /app/flask-api/
    exit 1
fi

# Verificar se o frontend foi buildado
if [ ! -d "/app/frontend/dist" ]; then
    echo "AVISO: Frontend não encontrado em /app/frontend/dist"
    ls -la /app/frontend/ || echo "Diretório frontend não existe"
fi

# Configurar permissões
chown -R root:root /app
chmod -R 755 /app

# Inicializar serviços com Supervisor
echo "Iniciando serviços..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf