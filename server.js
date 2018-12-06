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

// Local dependencies
const apiRoute = require('./core/routes/index')


/**
 * Middlewares
 */
const requestLogger = require('./core/middlewares/requestLogger')

/**
 * Constant
 */
const port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static('public'))
app.use(requestLogger)

app.use('/api', apiRoute)

app.listen(port, () => {
    signale.time('Starting server')
    signale.info(`Operation successful http://localhost:${port}`);
    signale.timeEnd()
})