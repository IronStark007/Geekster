const express = require('express');
const app = express();
const parking = require('./routes/parking')
const booking = require('./routes/booking')
const payment = require('./routes/payment')

$port = 8000;
$localhost = "127.0.0.1";

app.use(express.json());

app.use('/parking', parking);
app.use('/booking', booking);
app.use('/payment', payment);


app.listen($port, () => {
    console.log(`Connected to server http://${$localhost}:${$port}`)
});