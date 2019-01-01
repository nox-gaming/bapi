const db = require('../init')
const signale = require('signale')

/**
 * Create an event
 * @param {data.title} title
 * @param {data.isFinished} is_finished
 */
async function create(data){
    signale.info('Creating an event', data)
    const dti = {
        title: data.title,
        schedule_id: data.scheduleId,
        is_finished: data.isFinished
    }
    try {
        const eventCreated = await db('events')
            .returning('id')
            .insert(dti)
        return eventCreated;
    } catch (error) {
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = create;