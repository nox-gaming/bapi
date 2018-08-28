const axios = require('axios')
const routes = require('./routes')
const config = require('../config.json')
const suffix = 'locale=en_EN&apikey=u5hagn2yuvv5graytc24rbek2sg7ndnf'


function url(){
    return new Promise((resolve,reject) => {

    })
}
function urlBuilder(endpoint, fields) {
    let url = `${config.base_url}${endpoint}`
    fields.map(field => {
        url += `&${field}`
    })
    url+= suffix
    console.log('url', url)
    return url;
}
https://eu.api.battle.net/wow/item/18803?locale=en_EN&apikey=u5hagn2yuvv5graytc24rbek2sg7ndnf
/**
 * Request centralisation
 * @param {string} url 
 * @param {object} fields 
 */
function rq(endpoint, options, fields) {
    
    return 'hello'
   /*  return axios.get(routes.getCharacterDetails('hyjal', 'Carbø'))
        .then(response => {
            console.log('lol', response)
            return response.data
        })
        .catch(error => console.log(error)) */
}

module.exports = rq;