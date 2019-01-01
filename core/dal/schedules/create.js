const db = require('../init')
const signale = require('signale')

/**
 * Create a schedule
 * @param {data.title} title
 * @param {data.isFinished} is_done
 */
async function create(data){
    signale.info('Creating a planning')
    const dti = {
        title: data.title
    }
    try {
        const planCreated = await db('schedules')
            .returning('id')
            .insert(dti)
        return planCreated;
    } catch (error) {
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = create;