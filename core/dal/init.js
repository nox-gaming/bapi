/* KNEX INITIALISATION */
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'password',
        database: 'nox_guild'
    }
});

module.exports = knex;

