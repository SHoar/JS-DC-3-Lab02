var express = require('express')
var exphbs = require('express-handlebars')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/tunr')

var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use( express.static('public') )

app.get('/', function(req, res){
  res.render('home')
})

app.listen(3000, function(){
  console.log('Tunr is being hosted at port 3000')
})
