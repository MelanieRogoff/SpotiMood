import { getAuthToken } from '../getAuthToken';
import * as SpotifyWebApi from 'spotify-web-api-js';

// ref: https://developer.spotify.com/documentation/web-api/reference/search/search/
// also ref: https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/

const sadURL = 'https://api.spotify.com/v1/search?query=sad&type=track'; //GET ENDPOINT

export async function sadSongSearch() {
    const token = await getAuthToken();
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(token);

    spotifyApi.searchTracks(sadURL).then((data) => {
        console.log(data.tracks, 'SAD!')
    }, (err) => {
        console.log(err.message);
    });
}
