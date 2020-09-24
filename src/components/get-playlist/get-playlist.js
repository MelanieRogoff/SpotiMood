import * as SpotifyWebApi from 'spotify-web-api-js';
const Spotify = require('spotify-web-api-js');

const spotify = new Spotify();

//Start by instantiating the wrapper, via npm instructions:
const spotifyApi = new SpotifyWebApi();

//set our access token if we have it
spotifyApi.getAccessToken('');

console.log(spotify, 'spotify')