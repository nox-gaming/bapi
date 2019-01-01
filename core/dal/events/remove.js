const db = require('../init')
const signale = require('signale')

function findPlan(scheduleId){}

/**
 * remove a schedule
 * @param {data.id} id
 */
async function remove(data){
    signale.info('Removing an event')
    const dti = { id: data.id }
    try {
        const removedPlan = await db('events')
            .returning('id')
            .where(dti)
            .del()
        return removedPlan;
    } catch (error) {
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = remove;