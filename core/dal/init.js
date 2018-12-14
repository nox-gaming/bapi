const env = process.env.NODE_ENV;
const isProd = env === 'dev' ? true : false;
const connectToDatabase = {
    client: 'pg',
    connection: {
        host: isProd ? process.env.DB_HOST : 'localhost',
        user: isProd ? process.env.DB_USER : 'postgres',
        password: isProd ? process.env.DB_PASSWORD : 'postgres',
        database: isProd ? process.env.DB_NAME : 'requests'
    }
}

console.log('connectToDatabase', JSON.stringify(connectToDatabase, null, 4));


/* KNEX INITIALISATION */
const knex = require('knex')(connectToDatabase);

module.exports = knex;