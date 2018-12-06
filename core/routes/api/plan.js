const express = require('express')
const signale = require('signale')
const router = express.Router()

const db = require('../../dal/index')

router.get('/', function (req, res) {
    db.select().from('plans').then(data => {
        signale.success(data);
        res.send(data)
    }).catch(e => signale.error('Oops', e))
})

module.exports = router;