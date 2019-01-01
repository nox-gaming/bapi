const db = require('../init')
const signale = require('signale')

/**
 * list schedules
 */
async function list(){
    signale.info('Fetching plannings')
    try {
        const plannings = await db.select().from('schedules')
        signale.success(plannings);
        return plannings;
    } catch (error) {   
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = list;