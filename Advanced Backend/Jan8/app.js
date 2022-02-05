var express = require('express')
var app = express()

var path = require('path')
var port = 5050

var movies = require('./controllers/movies')
var bookings = require('./controllers/booking')

app.get('/movies', (req, res) => {
    res.send(movies.getAllMovies(req.query.name))
})

app.put('/movies', express.json(), (req, res) => {

    res.send(movies.updateMovie(req.body))
})

app.delete('/booking', (req, res) => {
    console.log(" i am here")
    res.send(bookings.deleteBooking(req.query.id));
})

app.listen(port, (err) => {
    if (err) {
        console.log("Server Busy")
    } else {
        console.log("Server running at http://127.0.0.1:" + port)
    }
})