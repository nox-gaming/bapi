const express = require('express')
const router = express.Router()
const db = require('../../dal/index')


router.get('/', function (req, res) {
    db.select().from('plans').then(data => {
        console.log(data);
        
        res.send(data)
    });
})

module.exports = router;