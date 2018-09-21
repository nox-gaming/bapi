const config = require('../../config.json')
const t = process.env.TOKEN || 'km2ftg96z3pnsgtjqsh4pcrngs563uby'

/**
 * End_url helper
 */
const end_url = `?locale=${config.locale}&apikey=${t}`

/**
 * Build routes
 */
const routes = {
    itemDetails: (number) => encodeURI(`${config.base_url}/wow/item/${number}${end_url}`),
    characterDetails: (realm, name) => encodeURI(`${config.base_url}/wow/character/${realm}/${name}${end_url}`)
}

module.exports = routes;