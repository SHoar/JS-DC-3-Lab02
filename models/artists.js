var mongoose = require('mongoose')
var Schema = mongoose.Schema

var artistSchema = new Schema({
  name: String,
  genre: String,
  spotifyURL: String,
  spotifyImage: String
})
var Artist = module.exports = mongoose.model('Artist', artistSchema)
