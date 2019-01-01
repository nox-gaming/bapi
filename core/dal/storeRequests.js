const db = require('./init')
const signale = require('signale')

/**
 * Store the request
 * @param {data.requestId} requestId
 * @param {data.userAgent} userAgent
 * @param {data.method} method
 * @param {data.url} url
 * @param {data.request} request
 * @param {data.response} response
 */
async function storeRequest(data){        
    const dts = {
        request_id: data.requestId,
        user_agent: data.userAgent,
        method: data.method,
        url: data.url,
        request: data.request,
        response: data.response
    }
    try {
        const requestStored = await db('requests').insert(dts)
        return requestStored;
    } catch (error) {
        signale.error('Error when storing the request', error)
        throw error;
    }
}

module.exports = storeRequest;