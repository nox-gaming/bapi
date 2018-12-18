const db = require('../init')
const signale = require('signale')

/**
 * remove a plan
 * @param {data.id} id
 */
async function remove(data){
    signale.info('Removing a planning')
    const dti = { id: data.id }
    try {
        const removedPlan = await db('plans')
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