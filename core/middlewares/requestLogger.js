const requestLogger = (req, res, next) => {
    signale.info('Request incoming', res)
    next()
}

module.exports = requestLogger;
