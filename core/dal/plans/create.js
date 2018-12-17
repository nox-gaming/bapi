const knex = require('../init')
const signale = require('signale')

/**
 * Create a plan
 */
function create(){
    signale.info('Creating a planning')
    return knex('plans')
    .insert({
        id: 123,
        title: 'Slaughterhouse Five',
        is_done: false
    })
    .then(data => {
            signale.success('Planning successfully created', data);
            res.send(data)
        })
        .catch(e => {
            signale.error('Planning could not be created', e)
            return res.json({
                error : {
                    message: 'Planning could not be created',
                    code: 500
                }
            })
        })
}

module.exports = create;