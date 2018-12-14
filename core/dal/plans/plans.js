const db = require('../init')
const signale = require('signale')

function listPlans(){
    console.log('listing plans')
    db.select().from('plans').then(data => {
        signale.success(data);
        res.send(data)
    })
    .catch(e => {
        signale.error('Oops', e)
        return res.json({ error : 'Oops cant connect to db'})
    })
}

module.exports = listPlans;
