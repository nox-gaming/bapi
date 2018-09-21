const axios = require('axios')
const signale = require('signale')
const routes = require('../api/routes.js')
const { successHandler, errorHandler } = require('../helpers/payloadFormatter.js')


/**
 * Fetch informations on character
 * @param {string} realm Character's realm
 * @param {string} name Character's name
 */
const getCharacterDetails = (realm, name) => 
  axios.get(routes.characterDetails(realm, name))
    .then(characterDetails => {
      signale.success('Found data', characterDetails)
      return characterDetails.data
    })
    .catch(error => errorHandler(error));

module.exports = getCharacterDetails;