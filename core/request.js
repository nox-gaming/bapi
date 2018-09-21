const axios = require('axios')
const apiRoutes = require('./api')
const config = require('../config.json')
const apiKey = process.env.TOKEN || 'km2ftg96z3pnsgtjqsh4pcrngs563uby'

const suffix = `locale=en_EN&apikey=${apiKey}`

// https://eu.api.battle.net/wow/item/18803?locale=en_EN&apikey=u5hagn2yuvv5graytc24rbek2sg7ndnf

function urlBuilder(endpoint, fields) {
    let url = `${config.base_url}${endpoint}`
    fields.map(field => {
        url += `&${field}`
    })
    url+= suffix
    console.log('url', url)
    return url;
}

/**
 * Request centralisation
 * @param {string} url 
 * @param {Object} fields
 * @returns {Object}
 */
function rq(endpoint, options, fields) {
    
    // return 'hello'
   return axios.get(apiRoutes.getCharacterDetails('hyjal', 'Carbø'))
        .then(response => {
            console.log('Response for', response)
            return response.data
        })
        .catch(error => console.log(error))
}

module.exports = rq;