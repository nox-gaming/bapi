const express = require('express')
const router = express.Router()

const planRoute = require('./api/plans.js')
const eventsRoute = require('./api/events.js')

router.use('/plans', planRoute)
router.use('/events', eventsRoute)

module.exports = router;