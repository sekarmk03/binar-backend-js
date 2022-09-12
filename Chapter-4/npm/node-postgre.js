const { Client } = require('pg');
const client = new Client({
    user: 'tatangdev',
    password: 'aandeani',
    host: 'localhost',
    database: 'youtube',
    port: 5432,
});


/* synchronous */
client.connect();

client.query('SELECT * FROM users', (err, res) => {
    console.log(res.rows);
    client.end();
});


/* asynchronous */
// async function main() {
//     await client.connect();

//     const res = await client.query('SELECT * FROM users');
//     console.log(res.rows[0].message);

//     await client.end();
// }
// main();
