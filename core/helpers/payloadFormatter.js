var status = require('statuses')

/**
 * Error object returned by Blizzard api
 * @param {object} error errors with some data
 */
const errorHandler = (error) => ({
    code: error.response.status,
    message: status[error.response.status],
    method: error.response.config.method,
    url: error.response.config.url,
    data: error.response.data
})
  
/**
 * Error object returned by Blizzard api
 * @param {object} success object with data 
 */
const successHandler = (success) => ({
    code: success.status,
    message: status[success.status],
    method: success.config.method,
    url: success.config.url,
    data: success.data
})

module.exports = {
    errorHandler,
    successHandler
}