const express = require('express')
const router = express.Router() 

router.get('/movies', (req, res) => {
    console.log(moviesSaved)
    res.render('movies', {movies: moviesSaved})
})

router.get('/movies/create', (req, res) => {
    res.render('new-movie')
})

router.post('/movies/create', (req, res) => {
    moviesSaved.push({id: idCount, name: req.body.name, description: req.body.description, genre: req.body.genre, image: req.body.image})
    
    idCount++
    res.redirect('/movies')
})

router.post('/movies/delete', (req, res) => {
    moviesSaved = moviesSaved.filter((movie) => movie.id != req.body.id)
    res.redirect('/movies')
})

router.get('/movies/:movieID', (req, res) => {
    let filteredMovies = moviesSaved.filter((movie) => movie.id == req.params.movieID)
    let movie = filteredMovies[0]
    console.log(`Filter ${movie}`)
    res.render('movie-details', {movies: movie})

})

router.get('/movies/genre/:genre', (req, res) => {
    let filteredMovies = moviesSaved.filter((movie) => movie.genre == req.params.genre)
    console.log(filteredMovies)
    res.render('movies', {movies: filteredMovies})
})

router.get('/api/movies', (req, res) => {
    res.json({testMessage: "hello", movies: moviesSaved})
})

module.exports = router 

