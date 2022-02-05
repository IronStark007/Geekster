// list all movies, list movies with a city id
const movies = require('./../models/movies')
const cities = require('./../models/cities')
const fs = require('fs');

function updateMovieinfile(movie_list) {
    file = "C:/Users/ansar/OneDrive/Documents/Web development/geekster/Geekster/Advanced Backend/Jan8/models/movies.js"
    var content = fs.readFileSync(file, "utf8");
    end = content.indexOf("=")
    first_words = content.slice(0, end + 1)
    complete = `${first_words} ${JSON.stringify(movie_list)}`
    fs.writeFileSync(file, complete, 'utf8');
}

module.exports = {
    getAllMovies: function getAllMovies(city_name) {
        var city = cities.cities.filter((city) => city.name == city_name)[0]
        var all_movie = movies.movies.filter((movie) => movie.cityId == city.id)
        return all_movie
    },
    updateMovie: function updateMovie(body) {
        movie = movies.movies.filter((movie) => movie.id == body.id)[0];
        movie.name = body.name;
        movie.duration = body.duration;
        updateMovieinfile(movies.movies)
        return { "message": "Movie Updated" }
    }
}