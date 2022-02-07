global.express = require('express')
var app = express()
var product = require('./routers/product')

app.get('/', (request, response) => {
    response.send("Hey There!")
})

app.use('/', product)
$port = process.env.port
$host = process.env.host

app.listen(3001, () => {
    // console.log(process.env)
    console.log("Listening to http://127.0.0.1:3001")
})