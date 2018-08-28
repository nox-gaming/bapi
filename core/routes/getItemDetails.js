const axios = require('axios')
const routes = require('./routes')
const { successHandler, errorHandler } = require('../helpers/payloadFormatter.js')

/**
 * Fetch informations on item by id
 * @param {integer} number Item's id
 */
module.exports = (number) => axios.get(routes.itemDetails(number))
  .then(itemDetails => itemDetails.data)
  .catch(error => errorHandler(error));