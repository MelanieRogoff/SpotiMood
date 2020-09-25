
import axios from 'axios';
import qs from 'qs';

const tokenUrl = 'https://accounts.spotify.com/api/token'
const clientId = '05370ef1a89b443ca4ab31a4c02436ee';
const secret = 'a12309f2667145e3abbc48e68afade03';

/**
 * @summary Gets the user's authorization token for login usage
 * ref: https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
 */
export async function getAuthToken() {
    const data = { grant_type: 'client_credentials' }; //The function requires key: grant_type, with corresponding value being 'client-credentials'
    const token = `${clientId}:${secret}`; //the value for the Authorization header is: Basic INSERT CLIENTID:SECRET HERE
    const tokenBase = btoa(token); // convert this token into Base 64 format so that we can complete the Authorization request properly
  
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${tokenBase}` //this is from the Spotify docs
            },
        data: qs.stringify(data), //making the object data into a string
        url: tokenUrl, // url for the POST call
    };

    try {
        const response = await axios(options); //this is asynch, so we can do async/await within a try/catch block
        return response.data.access_token; //return just the token
    } catch (error) {
       console.log(error.message, 'hello') 
    } 
}
