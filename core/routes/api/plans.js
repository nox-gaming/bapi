const express = require('express')
const signale = require('signale')
const router = express.Router()

const db = require('../../dal/init')
const DAL = require('../../dal/index')

// Get plans
router.get('/', async function (req, res) {
    const plannings = await DAL.plans.list()
    return res.send(plannings)
})

// Create a plan
router.post('/', async function (req, res) {
    const planCreated = await DAL.plans.create(req.body)
    return res.json({ status: "success", id: planCreated})
})

// Fetch a plan
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const planning = await DAL.plans.fetch({ id })
    return res.json({ status: "success", planning})
})

// Delete a plan
router.delete('/:id', async function (req, res) {
    const { id } = req.params;
    const planning = await DAL.plans.remove({ id })
    return res.json({ status: "success", planning})
})

module.exports = router;