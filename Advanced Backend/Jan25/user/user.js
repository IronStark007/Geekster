const express = require('express');
const route = express();
const schemaValidator = require('../validateSchema');

route.post('/',express.json() ,(req, res) => {
    console.log(req.body);
    var validate = schemaValidator()
})