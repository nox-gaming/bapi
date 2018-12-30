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

// Fetch a plan
// router.get('/:id', async function (req, res) {
//     const { id } = req.params;
//     const planning = await DAL.events.fetch({ id })
//     return res.json({ status: "success", planning})
// })

// Delete a plan
// router.delete('/:id', async function (req, res) {
//     const { id } = req.params;
//     const planning = await DAL.events.remove({ id })
//     return res.json({ status: "success", planning})
// })

module.exports = router;