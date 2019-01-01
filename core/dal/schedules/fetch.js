const db = require('../init')
const signale = require('signale')

/**
 * fetch schedules
 */
async function fetch(data){
    signale.info(`Fetching planning with id ${data.id}`)
    try {
        const plannings = await db
            .where({ id: data.id }).select()
            .from('schedules')
        
            signale.success(plannings);
        return plannings;
    } catch (error) {   
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = fetch;