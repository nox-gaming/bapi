const express = require('express')
const signale = require('signale')
const router = express.Router()

const db = require('../../dal/init')
const DAL = require('../../dal/index')

// Get schedules
router.get('/', async function (req, res) {
    const plannings = await DAL.schedules.list()
    return res.send(plannings)
})

// Create a schedule
router.post('/', async function (req, res) {
    const planCreated = await DAL.schedules.create(req.body)
    return res.json({ status: "success", id: planCreated})
})

// Fetch a schedule
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const planning = await DAL.schedules.fetch({ id })
    return res.json({ status: "success", planning})
})

// Delete a schedule
router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    const planning = await DAL.schedules.remove({ id })
    return res.json({ status: "success", planning})
})

module.exports = router;