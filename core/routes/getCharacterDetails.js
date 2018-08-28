const axios = require('axios')
const routes = require('./routes.js')
const { successHandler, errorHandler } = require('../helpers/payloadFormatter.js')

/**
 * Fetch informations on character
 * @param {string} realm Character's realm
 * @param {string} name Character's name
 */
module.exports = (realm, name) =>
  axios.get(routes.characterDetails(realm, name))
    .then(characterDetails => characterDetails.data)
    .catch(error => errorHandler(error));