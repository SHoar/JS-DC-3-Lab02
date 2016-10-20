var mongoose = require('mongoose')
var Schema = mongoose.Schema


var songSchema = new Schema({
  song_name: String,
  genre: String,
  // album:
  spotifyURL: String,
  spotifyImage: String
})

var Song = mongoose.model('Song', songSchema)

module.exports = Song
