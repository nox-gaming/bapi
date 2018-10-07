const axios = require('axios')
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
        .then(response => {
            console.log('Response for', response)
            return response.data
        })
        .catch(error => console.log(error))
}

module.exports = rq;