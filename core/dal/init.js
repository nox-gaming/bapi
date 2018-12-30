const env = process.env.NODE_ENV;
const isProd = env === 'prod' ? true : false;
const connectToDatabase = {
    client: 'pg',
    connection: {
        host: isProd ? process.env.DB_HOST : 'localhost',
        user: isProd ? process.env.DB_USER : 'postgres',
        password: isProd ? process.env.DB_PASSWORD : 'password',
        database: isProd ? process.env.DB_NAME : 'nox_guild'
    }
}

console.log('connectToDatabase', isProd ? 'prod' : 'dev');


const knex = require('knex')(connectToDatabase);

module.exports = knex;