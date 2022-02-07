global.express = require('express')
global.joi = require('joi')

var app = express()
var product = require('./routers/product')

require('./db')

app.use(express.json())
app.use('/products', product);
$port = process.env.port
$host = process.env.host


app.use('/products', product)

app.listen(3001, () => {
    console.log("Listening to http://127.0.0.1:3001")
})