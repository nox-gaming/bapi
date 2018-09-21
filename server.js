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

/**
 * Middlewares
 */
const requestLogger = require('./core/middlewares/requestLogger')
const getCharacterDetails = require('./core/middlewares/getCharacterDetails')

/**
 * Constant
 */
const port = process.env.PORT || 3000

/**
 * Error handler
 * @param {Object} err 
 */
const errorHandler = (err) => {
    let error = err;
    if (!error.code) {
        signale.error(err.stack, { data: { error: err.stack || err } })
        error = new Error(err.message);
    }
    signale.error('Unexpected error', error)
    return error;
};


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/character', async (req, res) => {
    const { name, realm } = req.body;
    const characterDetails = await getCharacterDetails(realm, name)
    if (characterDetails.code !== 200) errorHandler(characterDetails.data)
    return res.json({
        code: characterDetails.code,
        characterDetails
    })
})

// req.hearders
// req.body
// req.url
// req.method
// req.method
// req.route


app.listen(port, () => {
    signale.time('Starting server')
    signale.info(`Operation successful http://localhost:${port}`);
    signale.timeEnd()
})