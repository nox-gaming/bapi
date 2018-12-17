const db = require('../init')
const signale = require('signale')

/**
 * Create a plan
 * @param {data.title} title
 * @param {data.isDone} is_done
 */
async function create(data){
    signale.info('Creating a planning')
    const dti = {
        title: data.title,
        is_done: data.isDone
    }
    try {
        const planCreated = await db('plans')
            .returning('id')
            .insert(dti)
        return planCreated;
    } catch (error) {
        signale.error('Oops', error)
        throw error;
    }
}

module.exports = create;