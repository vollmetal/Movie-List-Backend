const express = require('express')
const mustache = require('mustache-express')
const app = express()
const mainPageRouter = require('./routes/main-page')

global.moviesSaved = []
global.idCount = 0

app.engine('mustache', mustache())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(express.json())

app.use(express.static('static'))
app.use('/movies',express.static('static'))
app.use('/movies/genre',express.static('static'))

app.use('/', mainPageRouter)



app.listen(6420, () => {

})