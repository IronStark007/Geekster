const express = require('express');

function middleware(req, res, next) {
    next();
}

module.exports = middleware