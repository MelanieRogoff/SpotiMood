import { getAuthToken } from '../spotify/getAuthToken';
import * as SpotifyWebApi from 'spotify-web-api-js';

/**
 * @param {Function} spotifyApi -- passing in this so that we can create a new instance of the SpotifyWebApi();
 * @summary - Gets the Auth Token, creates a new instance of the SpotifyWebApi, and uses that SpotifyWebApi instance in order to set the token
 */
export async function tokenSetter(spotifyApi) { 
   const token = await getAuthToken();
   spotifyApi = new SpotifyWebApi();
   spotifyApi.setAccessToken(token);
}