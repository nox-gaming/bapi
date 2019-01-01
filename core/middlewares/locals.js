const express = require('express')

function setupLocals(data) {
    return express.locals.data
}

module.exports = setupLocals;
