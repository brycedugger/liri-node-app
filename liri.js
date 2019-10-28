//Liri can take in one of these 4 commands.

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

// 1. `node liri.js concert-this <artist/band name here>`

//    * need to apply application so that it can take multi word arguement?

// var axios = require("axios");
// var moment = require('moment');

// var artist = process.argv[2];

// axios.get("https://rest.bandsintown.com/artists/" + artist +  "/events?app_id=codingbootcamp").then(
//   function(response) {
//     console.log("Name of Venue: " + response.data[0].venue.name);
//     console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
//     console.log("Date of Event (MM/DD/YYYY): " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
//   })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log("---------------Data---------------");
//       console.log(error.response.data);
//       console.log("---------------Status---------------");
//       console.log(error.response.status);
//       console.log("---------------Status---------------");
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });



//   2. `node liri.js spotify-this-song '<song name here>'`

//    * need to apply application so that it can take multi word arguement?
//    MISSING* If no song is provided then your program will default to "The Sign" by Ace of Base.



// require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
console.log(keys)

var spotify = new Spotify({

  });

var song = process.argv[2];

spotify
.search({ type: 'track', query: song })
.then(function(response) {
    //Artist
    console.log(response.tracks.items[0].artists[0].name);
    // Song Name
    console.log(response.tracks.items[0].name);
    //Spotify Link to Song
    console.log(response.tracks.items[0].artists[0].external_urls.spotify);
    //Album from Song
    console.log(response.tracks.items[0].album.name);
  })
  .catch(function(err) {
    console.log(err);
  });