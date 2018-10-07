var fs = require("fs");
var request = require("request");
var dotenv = require("dotenv").config();
var keys = require ("./keys.js");
var Spotify = require('node-spotify-api');



var command = process.argv[2];
var searchValue = " ";



function getThisMovie(searchValue) {
    //var movieTitle= [];

    var queryURL= "http://www.omdbapi.com/?i=" + searchValue + "&y=&plot=short&apikey=96dcd0dc";
    

    if (searchValue = "") {
        searchValue = "Mr. Nobody";
        console.log("It's on Netflix!");
    }

    request(queryURL, function(error, data, body) {
        if (error) {
            console.log("Error! Could not find movie.");
        }
        else {
        console.log(data);
        var movieInfo = JSON.parse(body);
        console.log("Movie title:" + movieInfo.Title);
        console.log("Year: " + movieInfo.Year);
        console.log("Rating: " + movieInfo.Rating);
        console.log("Rotten Tomatoes: " + movieInfo.RottenTomatoes);
        console.log("Country: " + movieInfo.Country);
        console.log("Language: " + movieInfo.Language);
        console.log("Plot: " + movieInfo.Plot);
        console.log("Actors: " + movieInfo.Actors);
        }
    }); 



//append movie entry to log.txt
fs.writeFile("log.txt", "Movie Search: " + "\nLogged on:" + Date() + process.argv + "\nData output:", function(error) {

    if (error) {
    console.log(error);
    }
  
    console.log("log.txt was updated!");
  
  });
}

switch (command) {
    case "movie-this":
    getThisMovie();
    break;
}


function spotifySong (searchValue) {
    if (searchValue === "") {
        searchValue = "The Sign Ace of Base";
    }

    var spotify = new Spotify (keys.spotify);

    spotify.search({ type: 'track', query: searchValue, function(error, data, body) {
        if (error) {
          return console.log('Error occurred: ' + error);
        }
       
      console.log(data); 
      var songInfo = JSON.parse(body);

      console.log("Song Title: " + songInfo.name );
      console.log("Artist: " + songInfo.artists);
      console.log("Album: " + songInfo.albums);
      console.log("Preview: " + songInfo.preview_url);
    }
      });

      fs.writeFile("log.txt", "Movie Search: " + "\nLogged on:" + Date() + process.argv + "\nData output:", function(error) {
          if (error) {
              console.log(error);
          }
          else {
              console.log("log.txt updated!");
          }
      });
    }

    switch (command) {
        case "spotify-this-song":
        spotifySong();
        break;
    }


    function doIt () {
        fs.readFile("random.txt", "utf8", function(error, data) {
            var randomFile = data.split(", ");
            if (randomFile[0]==="spotify-this-song") {
                spotifySong();
            }
            else {
                console.log("Excuse me?");
            };

        });
    }

    switch (command) {
        case "do-what-it-says":
        doIt();
        break;
    }

    function findBand() {

        var bandURL = "https://rest.bandsintown.com/artists/" + searchValue + "/events?app_id=codingbootcamp";

        if (searchValue=== "") {
            console.log("You didn't search anything");
        }

        request(bandURL, function (error, data, body) {
            if (error) {
                console.log("Error!");
            }
            else {
                console.log(data);
                var bandInfo = JSON.parse(body);
                console.log("Venue: " + bandInfo.venue);
                console.log("Location: " + bandInfo.location);
                console.log("Date: " + bandInfo.date.format("MM/DD/YY"));
            }
        });
    }

    switch (command) {
        case "concert-this":
        findBand();
        break;
    }




