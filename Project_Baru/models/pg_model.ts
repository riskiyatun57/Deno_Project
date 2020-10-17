import { Client } from 'https://deno.land/x/postgres/mod.ts';
import { QueryResult,QueryConfig } from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "postgres",
    password : "kiki123",
    database : "db_blogproject"
});

export async function select(qry : QueryConfig){
    await client.connect();
    let hasil : QueryResult = await client.query(qry);
    await client.end();

    return hasil.rowsOfObjects();
}