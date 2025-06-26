CREATE TABLE building_info_tb (
    id SERIAL PRIMARY KEY,
    build_name VARCHAR(200),
    build_number INTEGER,
    lnglat VARCHAR(50),
    switchs TEXT
);
