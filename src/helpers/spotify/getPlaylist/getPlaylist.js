import * as SpotifyWebApi from 'spotify-web-api-js';
import { getAuthToken } from '../getAuthToken';

export async function getPlaylist (userId, playlistId) {
    const token = await getAuthToken();
    const spotifyApi = new SpotifyWebApi();
    spotifyApi.setAccessToken(token);
    
    spotifyApi.getPlaylist(userId, playlistId).then((data) => {
        console.log(data, 'data')
    }, (err) => {
        console.log('ERROR', err)
    })
}
