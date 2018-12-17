const axios = require('axios')
const signale = require('signale')
const apiRoutes = require('./api')
const config = require('../config.json')

const suffix = `locale=${config.locale}&apikey=${process.env.TOKEN}`

/**
 * Request centralisation
 * @param {string} url 
 * @param {Object} fields
 * @returns {Object}
 */
function rq(endpoint, options, fields) {
   return axios.get(apiRoutes.getCharacterDetails('hyjal', 'Carbø'))
        .then(response => response.data)
        .catch(error => {
            signale.error('Error while processing request', error)
            throw error
        })
}

module.exports = rq;