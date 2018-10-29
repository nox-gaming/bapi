const signale = require('signale')

const requestLogger = (req, res, next) => {
    const loggingData = () => ({
        method: req.method,
        body: req.body
    })
    signale.info('|> Request incoming', loggingData())
    next()
}

module.exports = requestLogger;
