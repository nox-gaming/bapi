const db = require('../init')
const signale = require('signale')

/**
 * Create an event
 * @param {data.title} title
 * @param {data.isDone} is_done
 */
async function create(data){
    signale.info('Creating an event', data)
    const dti = {
        title: data.title,
        plan_id: data.plan_id,
        is_done: data.is_done
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