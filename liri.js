// require("dotenv").config();

// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

//Liri can take in one of these 4 commands.

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

// 1. `node liri.js concert-this <artist/band name here>`

//    * need to apply application so that it can take multi word arguement?

var axios = require("axios");
var moment = require('moment');

var artist = process.argv[2];

axios.get("https://rest.bandsintown.com/artists/" + artist +  "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log("Name of Venue: " + response.data[0].venue.name);
    console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
    console.log("Date of Event (MM/DD/YYYY): " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });



//   2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window

//      * Artist(s)

//      * The song's name

//      * A preview link of the song from Spotify

//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

var spotify = require("spotify");