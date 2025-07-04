#!/bin/bash
set -e

# Criar diretório de logs
mkdir -p /app/logs

# Aguardar o PostgreSQL ficar disponível
echo "Aguardando PostgreSQL..."
while ! pg_isready -h postgres -p 5432 -U postgress; do
    echo "PostgreSQL não está pronto - aguardando..."
    sleep 2
done

echo "PostgreSQL está pronto!"

# Verificar se as tabelas existem, se não, criar
echo "Verificando estrutura do banco..."
PGPASSWORD=123456 psql -h postgres -U postgress -d app_db -c "
SELECT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'building_info_tb'
);" | grep -q 't' || {
    echo "Criando tabela building_info_tb..."
    PGPASSWORD=123456 psql -h postgres -U postgress -d app_db -c "
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

# Configurar permissões
chown -R root:root /app
chmod -R 755 /app

# Inicializar serviços com Supervisor
echo "Iniciando serviços..."
exec /usr/bin/supervisord -c /etc/supervisor/conf.d/supervisord.conf