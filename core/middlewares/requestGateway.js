const signale = require('signale')
const DAL = require('../dal/index')


const requestGateway = (req, res, next) => {
    signale.info('|> Request incoming')
    
    const data = {
        requestId : req.locals && req.locals.requestId || '',
        userAgent : req.headers['user-agent'],
        method : req.method,
        ip : req.headers['x-forwarded-for'],
        url : req.url,
        request: req.body
    }

    DAL.storeRequests(data)

    next()
}

module.exports = requestGateway;
