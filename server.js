/**
 * Libararies
 */
const dotenv = require('dotenv')
dotenv.load()

const bodyParser = require('body-parser')
const express = require('express')
const signale = require('signale')
const uuid = require('uuid')
const app = express()

const apiRoute = require('./core/routes/index')

/**
 * Middlewares
 */
const requestLogger = require('./core/middlewares/requestLogger')
const getCharacterDetails = require('./core/middlewares/getCharacterDetails')

const DAL = require('./core/dal/index')

/**
 * Constant
 */
const port = process.env.PORT || 3000

app.use('/api', apiRoute)

app.listen(port, () => {
    signale.time('Starting server')
    signale.info(`Operation successful http://localhost:${port}`);
    signale.timeEnd()
})