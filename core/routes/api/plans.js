const express = require('express')
const signale = require('signale')
const router = express.Router()

const db = require('../../dal/init')
const DAL = require('../../dal/index')

// Get plans
router.get('/', function (req, res) {
    console.log('Get all plans')
    db.select().from('plans').then(data => {
        signale.success(data);
        res.send(data)
    })
    .catch(e => {
        signale.error('Oops', e)
        return res.json({ error : 'Oops cant connect to db'})
    })
})

// Create a plan
router.post('/', function (req, res) {
    console.log('Create a plan', req.body)
    return res.json({ status: "success", hash: "d#ez3j"})
})
// Update a plan
router.put('/:id', function (req, res) {
    const { id } = req.params;
    console.log(`Update plan #${id} with`, req.body)
    return res.json({ status: "success", msg: "Object updated!", data: req.body })
})

module.exports = router;