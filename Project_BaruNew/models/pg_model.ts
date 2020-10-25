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
    let tabel : any = [];
    try {
        await client.connect();
        let hasil : QueryResult = await client.query(qry);
        await client.end();

        tabel = hasil.rowsOfObjects();

    } catch(error) {
        console.log(error);
    }
    return tabel;
}

export async function multiSelect(qry : QueryConfig[]){
    let tables : any = [];
    
    try {
        await client.connect();
        let hasil : QueryResult[] = await client.multiQuery(qry);
        await client.end();
        hasil.forEach((obj : any) => {
            tables.push(obj.rowsOfObjects());
        });
    } catch(error) {
        console.log(error);
    }
    return tables;
}