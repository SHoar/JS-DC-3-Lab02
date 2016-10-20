var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tunr')

var app = express()

var Artist = require('./models/artists.js')
var Song = require('./models/songs.js')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use( bodyParser.urlencoded({extended: true}) )
app.use( express.static('public') )


// This route gets the home page
app.get('/', function(req, res){
  res.render('home')
}) // WORKING

app.get('/artists/:id', function (req, res) {


})

//TODO: Create a post route for posting / editing / searching for a new artist.
// Currently: Shows search field and submit button for Artist
app.get('/search', function (req, res) {
  res.render('search')
})//DONE

//TODO: Create a post route for posting / editing / searching for a new artist.
app.post('/artist/:id', function (req, res) {





})

// //TODO: Create a put/update route for editing artist information
// app.put('/', function (req, res) {
//   res.send('/')
// })

// //TODO: Create a put/update route for editing song information
// app.put('/', function (req, res) {
//   res.send('/')
// })

app.listen(3000, function(){
  console.log('Tunr is being hosted at port 3000')
})
