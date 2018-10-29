/* KNEX INITIALISATION */
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

module.exports = knex;

