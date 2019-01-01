const db = require('../init')
const signale = require('signale')

/**
 * list schedules
 */
async function list(){
    signale.info('Fetching events')
    try {
        const events = await db.select().from('events')
        signale.success(events);
        return events;
    } catch (error) {   
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = list;