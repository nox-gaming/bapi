const express = require('express')
const router = express.Router()

const planRoute = require('./api/plans.js')

router.use('/plans', planRoute)
router.use('/events', planRoute)

module.exports = router;