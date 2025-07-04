-- Inicialização do banco de dados
CREATE DATABASE IF NOT EXISTS app_db;

-- Conectar ao banco
\c app_db;

-- Criar tabela building_info_tb
CREATE TABLE IF NOT EXISTS building_info_tb (
    id SERIAL PRIMARY KEY,
    qtd_sw INTEGER,
    build_name VARCHAR(200),
    build_number INTEGER,
    lnglat VARCHAR(50),
    switchs TEXT
);

-- -- Inserir dados de exemplo (opcional)
-- INSERT INTO building_info_tb (qtd_sw, build_name, build_number, lnglat, switchs) 
-- VALUES 
--     (5, 'Building A', 1, '-3.1390,-60.0217', 'sw1,sw2,sw3,sw4,sw5'),
--     (3, 'Building B', 2, '-3.1400,-60.0227', 'sw1,sw2,sw3')
-- ON CONFLICT DO NOTHING;

-- -- Criar índices para performance
-- CREATE INDEX IF NOT EXISTS idx_building_info_build_number ON building_info_tb(build_number);
-- CREATE INDEX IF NOT EXISTS idx_building_info_build_name ON building_info_tb(build_name);