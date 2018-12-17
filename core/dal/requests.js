const db = require('../init')
const signale = require('signale')

/**
 * fetch plans
 */
async function fetch(data){
    signale.info(`Fetching planning with id ${data.id}`)
    try {
        const plannings = await db
            .where({ id: data.id }).select()
            .from('requests')
        
            signale.success(plannings);
        return plannings;
    } catch (error) {   
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = fetch;