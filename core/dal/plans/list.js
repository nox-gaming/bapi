const db = require('../init')
const signale = require('signale')

/**
 * list plans
 */
async function list(){
    signale.info('Fetching plannings')
    try {
        const plannings = await db.select().from('plans')
        signale.success(plannings);
        return plannings;
    } catch (error) {   
        signale.error('Oops', error)
        throw error;
    }
}

// db.select().from('plans').then(data => {
//     signale.success(data);
//     res.send(data)
// })
// .catch(e => {
//     signale.error('Oops', e)
//     return res.json({ error : 'Oops cant connect to db'})
// })


module.exports = list;