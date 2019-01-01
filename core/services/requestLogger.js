const requestGateway = (req, res, next) => {
    signale.info('Request incoming', res)
    next()
}

module.exports = requestGateway;
