const express = require('express')
const router = express.Router()

const planRoute = require('./api/plan.js')

router.use('/plan', planRoute)

module.exports = router;