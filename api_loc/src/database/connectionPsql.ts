// import { configDb } from '@/config';
import {Pool, PoolClient} from 'pg';

const user = "postgres";
const pswd = "123456";
const host = "127.0.0.1";
const port = 5432;
const db = "infra_switchs_db";


const connection = new Pool({   
    user: user,
    password: pswd,
    host: host,
    port: port,
    database: db,
});

connection.connect((err: Error | undefined, client: PoolClient | undefined) => {
    if(err) {
        throw new Error(`Erro connecting to database`);
    } else {
        console.log(`Connected to database`);
    }
});

export default connection;