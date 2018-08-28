const config = require('../../config.json')

/**
 * End_url helper
 */
const end_url = `?locale=${config.locale}&apikey=${config.token}`

/**
 * Build routes
 */
const routes = {
    itemDetails: (number) => `${config.base_url}/wow/item/${number}${end_url}`,
    characterDetails: (realm, name) => `${config.base_url}/wow/character/${realm}/${name}${end_url}`
}

module.exports = routes;