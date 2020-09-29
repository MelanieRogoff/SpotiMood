import * as SpotifyWebApi from 'spotify-web-api-js';
import { happiness }  from '../../../constants';
import { tokenSetter } from '../../tokenSetter';

/**
 * @summary Gets 10 happy songs and pushes them into an array for playlist creation.
 */
export async function happySongSearch() {
    const spotifyApi = new SpotifyWebApi(); //need to create new instance of SpotifyWebApi() to use in tokenSetter below
    tokenSetter(spotifyApi);
    const happyArray = [];
    const happy = happiness[Math.floor(Math.random() * happiness.length)]; 

    try { 
        const results = await spotifyApi.searchTracks(happy); 

        for (let i = 0; i < 10; i++) {
            happyArray.push(results.tracks.items[i].uri);
            console.log('Happy Songs: ', happyArray[i]);
        }    
    } catch (error) {
        alert('Network error - please try again later.');
    }
    
    return happyArray; 
}

