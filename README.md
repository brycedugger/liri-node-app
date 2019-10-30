**LIRI.JS**

**Overview**

 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


This application allows the user to ask LIRI to perform one of four commands:

1. concert-this
2. spotify-this-song
3. movie-this
4. do-what-it-says

**What The Code Does**

Using node.js, we will pass in one of these commands into our liri.js file along with an arguement stating a band, a song, a movie, or whatever is in our random.txt file. LIRI will then return information to us.

Calling concert-this along with an artist will return the name of the venue, venue location, and date of the next show the artist is playing using the bandsintown API and axios package.

Calling spotify-this-song along with a song will return the artist who plays the song, the song's name, a preview link of the song from Spotify, and the album the song is from using the Spotify API. If no song is provided, the program will default to "The Sign". These songs will be the best match for the song title the user provides.

Calling movie-this along with a movie title will return the title of the movie, year the movie came out, the IMDB rating of the movie, Rotten Tomatoes rating of the movie, country where the movie was produced, language of the movie, plot of the movie, and actors in the movie using the OMDB API and the axios package.

The last command will allow us to call do-what-it-says and return the text in the random.txt file in my directory. After moving this information into an array, I can search a song using a version of the spotify-this-song function to search for the song listed in the random.txt file.

To use the file in node, the users command will be argument 2 and users artist, song, movie, or song in the random.txt file will be arguement 3. The command line will look like so:

node liri.js Arg2 Arg3

Arg3 will use "+" as spaces for multi word inputs.

**Technology Used**

Required installations into the file containing the scripts will be:

1. axios
2. moment.js
3. dotenv
4. node-spotify-api
5. fs

The dotenv file is essential to hiding the user's spotify keys from the public. These keys will be called by the keys.js file and pulled into the liri.js code using the require function.

Screenshots of the code in action can be found in the screenshots folder for each situation described above. Download the code and play with it yourself if you so choose!

Supplemental information can be found using the following links:

axios:
https://www.npmjs.com/package/axios

Bands In Town API:
bandsintown.com

Spotify:
https://www.npmjs.com/package/node-spotify-api
https://developer.spotify.com/my-applications/#!/

FS:
https://www.npmjs.com/package/fs

Moment.js:
https://www.npmjs.com/package/moment
https://momentjs.com/

dotenv:
https://www.npmjs.com/package/dotenv