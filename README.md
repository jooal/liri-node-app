# liri-node-app

### The Project
This purpose of this project was to develop a desktop app using node.js to utilize npm packages. The app allows a user to search information about bands, songs, and movies. 
* spotify-this-song will search a song/artist through the Spotify API to return the following:
    - Artist
    - Song Name
    - Album the song is from
    - Link to preview 
* movie-this will search a movie through the OMDB API and return the following:
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
* concert-this will search a band through the Bands In Town API and return the following:
    * Venue
    * Location
    * Date of the event
* do-what-it-says will pull text from the random.txt file and run that specific command to either spotify-this-song, movie-this, or concert-this

Example of entry in terminal: node liri.js movie-this Inception
### Technologies
Node.js, npm packages, Javascript, Spotify API, OMDB API, and File Support.

### Prerequisites
Must have node.js and npm packages installed:
* npm install request
* npm install moment
* npm install node-spotify-api
* npm install dotenv

[Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

[Request](https://www.npmjs.com/package/request)
* You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com/) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

[Moment](https://www.npmjs.com/package/moment)

[DotEnv](https://www.npmjs.com/package/dotenv)

### Licensing
This project is licensed under the MIT License.








    
    
    
    

    
