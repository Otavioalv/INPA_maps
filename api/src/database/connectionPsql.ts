// import { configDb } from '@/config';
import {Pool, PoolClient} from 'pg';

const user = process.env.DB_USER ?? "postgres";
const pswd = process.env.DB_PASSWORD ?? "123456";
const host = process.env.DB_HOST ?? "127.0.0.1";
const port = parseInt(process.env.DB_PORT ?? "5432");
const db = process.env.DB_NAME ?? "infra_switchs_db";

const useSSL = process.env.DB_SSL === 'true';

const connection = new Pool({
    user,
    password: pswd,
    host,
    port,
    database: db,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: useSSL ? { rejectUnauthorized: false } : false,
});

connection.connect((err: Error | undefined, client: PoolClient | undefined) => {
    if(err) {
        console.log("Erro: ", err.message);
        throw new Error(`Erro connecting to database`);
    } else {
        console.log(`Connected to database`);
    }
});

export default connection;