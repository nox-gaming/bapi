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

// Serve static file
app.use('/', express.static('public'));

/**
 * Fake db
 */
const basic_plan = {
    overwatch: {
        blackwatch: [],
        lagriffe: []
    }
}

/**
 * Get the plan
 */
app.get('/plan/:plan_id', (req, res) => {
    const { plan_id, body } = req.params;
    
    const plan = {
        number: plan_id,
        body: req.body
    }
    basic_plan.overwatch.blackwatch.push(plan)
    
    res.status(200)
    res.json(basic_plan)
})

/**
 * Create a plan
 */
app.post('/plan/:plan_id', async (req, res) => {
    const { name, realm } = req.body;
    const response = await getCharacterDetails(realm, name)
    if (response.status !== 200) {
        signale.error('Error while calling /character', response);
        res.status(response.code)
        return res.json({ code: response.code })
    };
    return res.json({
        code: response.code,
        response
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