//Liri can take in one of these 4 commands.

//concert-this
//spotify-this-song
//movie-this
//do-what-it-says

var axios = require("axios");
var moment = require('moment');

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var fs = require("fs");

var command = process.argv[2]

switch (command){
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThis();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doThis();
        break;
}

// 1. `node liri.js concert-this <artist/band name here>`

function concertThis() {

    var artist = process.argv[3];

    axios.get("https://rest.bandsintown.com/artists/" + artist +  "/events?app_id=codingbootcamp").then(
    function(response) {
        console.log("Name of Venue: " + response.data[0].venue.name);
        console.log("Venue Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
        console.log("Date of Event (MM/DD/YYYY): " + moment(response.data[0].datetime).format('MM/DD/YYYY'));
        console.log("---------------------------------------------------------");
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

};

//   2. `node liri.js spotify-this-song '<song name here>'`

function spotifyThis(song) {

    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    if(process.argv.length < 4) {
        song = "the+sign";
    } else {
        song = process.argv[3];
    }

    spotify
    .search({ type: 'track', query: song })
    .then(function(response) {
        //Artist
        console.log("Song Artist: " + response.tracks.items[0].artists[0].name);
        // Song Name
        console.log("Song Name: " + response.tracks.items[0].name);
        //Spotify Link to Song
        console.log("Open Spotify " + response.tracks.items[0].artists[0].external_urls.spotify);
        //Album from Song
        console.log("Song Album: " + response.tracks.items[0].album.name);
        console.log("---------------------------------------------------------");
    })
    .catch(function(err) {
        console.log(err);
    });

};

// 3. `node liri.js movie-this '<movie name here>'`

function movieThis(movie) {

    if(process.argv.length < 4) {
        movie = "mr+nobody";
    } else {
        movie = process.argv[3];
    }

    axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
    function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("---------------------------------------------------------");
    }
    );
};

// 4. `node liri.js do-what-it-says`

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

//      * Edit the text in random.txt to test out the feature for movie-this and concert-this.

function doThis() {

    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
        return console.log(err);
        }
    
        // Break the string down by comma separation and store the contents into the output array.
        var output = data.split(",");
        console.log (output);

        var command = output[0];
        var input = output[1];
        var songArr = input.split(" ");
        // console.log (songArr[0] + "+" + songArr[1] + "+" + songArr[2] + "+" + songArr[3] + "+" + songArr[4]);
        var song = songArr[0] + "+" + songArr[1] + "+" + songArr[2] + "+" + songArr[3] + "+" + songArr[4];
        
        spotifyThisFS(song);
    });

};

function spotifyThisFS(song) {

    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    spotify
    .search({ type: 'track', query: song })
    .then(function(response) {
        //Artist
        console.log("Song Artist: " + response.tracks.items[0].artists[0].name);
        // Song Name
        console.log("Song Name: " + response.tracks.items[0].name);
        //Spotify Link to Song
        console.log("Open Spotify " + response.tracks.items[0].artists[0].external_urls.spotify);
        //Album from Song
        console.log("Song Album: " + response.tracks.items[0].album.name);
        console.log("---------------------------------------------------------");
    })
    .catch(function(err) {
        console.log(err);
    });
};