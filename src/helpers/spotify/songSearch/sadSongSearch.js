import * as SpotifyWebApi from 'spotify-web-api-js';
import { sadness }  from '../../../constants';
import { tokenSetter } from '../../tokenSetter';

/**
 * @summary Gets 10 sad songs and pushes them into an array for playlist creation.
 */
export async function sadSongSearch() {
    const spotifyApi = new SpotifyWebApi(); //need to create a new instance of the SpotifyWebApi() here
    tokenSetter(spotifyApi); //If incorrect token, no err message, just uncaught in promise. Need try/catch for error handling when calling spotifyApi later due to this.
    const sadArray = [];
    const sad = sadness[Math.floor(Math.random() * sadness.length)]; //sadness is an imported array of sad song strings -- randomizing the items in that array here.

    try { 
        const results = await spotifyApi.searchTracks(sad); //setting results to the object the function returns for the sad randomizer

        for (let i = 0; i < 10; i++) {
            sadArray.push(results.tracks.items[i].uri);
            console.log('Sad Songs: ', sadArray[i]);
        }    
    } catch (error) {
        alert('Network error - please try again later.');
    }
    
    return sadArray; 
}