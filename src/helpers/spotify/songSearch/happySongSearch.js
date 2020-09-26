import { getAuthToken } from '../getAuthToken';
import * as SpotifyWebApi from 'spotify-web-api-js';

// ref: https://developer.spotify.com/documentation/web-api/reference/search/search/
// also ref: https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/

const happyURL = 'https://api.spotify.com/v1/search?q=happy&type=track'; //GET ENDPOINT

export async function happySongSearch() {
    const token = await getAuthToken();
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(token);

    spotifyApi.searchTracks(happyURL).then((data) => {
        console.log(data.tracks, 'tracks to get')
    }, (err) => {
        console.log(err.message);
    });
}

//QUERY PARAMS: 

    //See about returning the following params:
        //preview_url (string -- links to a 30s preview )
        //name (string - name of track)
        //id (string - the id for the track)



// Create an API call that looks for 'Sad' songs