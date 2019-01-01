const express = require('express')
const signale = require('signale')
const router = express.Router()

const db = require('../../dal/init')
const DAL = require('../../dal/index')

// Get events
router.get('/', async function (req, res) {
    const events = await DAL.events.list()
    return res.send(events)
})

// Create an event
router.post('/', async function (req, res) {
    const createdEvent = await DAL.events.create(req.body)
    return res.json({ status: "success", id: createdEvent})
})

// Fetch an event
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const event = await DAL.events.fetch({ id })
    return res.json({ status: "success", event})
})

// Delete a schedule
router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    const event = await DAL.events.remove({ id })
    return res.json({ status: "success", event})
})

module.exports = router;