const axios = require('axios')
const signale = require('signale')
const apiRoutes = require('../api/routes.js')

const { successHandler, errorHandler } = require('../helpers/payloadFormatter.js')

/**
 * Fetch informations on character
 * @param {string} realm Character's realm
 * @param {string} name Character's name
 * @returns {Object} character details
 */
const getCharacterDetails = (realm, name) => 
  axios.get(apiRoutes.characterDetails(realm, name))
    .then(characterDetails => {
      const p = {
        status: characterDetails.status,
        statusText: characterDetails.statusText,
        data: characterDetails.data
      }
      signale.success('Found character data')
      return p
    })
    .catch(error => {
      signale.error('Error while trying to get character informations')
      return errorHandler(error)
    });

module.exports = getCharacterDetails;