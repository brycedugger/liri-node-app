require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//Liri can take in one of these 4 commands.

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

//1. node liri.js concert-this <artist/band name here>

