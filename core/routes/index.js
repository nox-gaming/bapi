const express = require('express')
const router = express.Router()

const planRoute = require('./api/schedules.js')
const eventsRoute = require('./api/events.js')

router.use('/schedules', planRoute)
router.use('/events', eventsRoute)

module.exports = router;