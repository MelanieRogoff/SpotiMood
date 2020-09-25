import * as SpotifyWebApi from 'spotify-web-api-js';

//Start by instantiating the wrapper, via npm instructions:
export function getPlaylist () {
  const spotifyApi = new SpotifyWebApi();

  const userId = '122493955';
  const playlistId = '5U3LFDdbXJdcoqfmD8NSp8';

  spotifyApi.getPlaylist(userId, playlistId).then((data) => {
    console.log(data, 'data')
  }, (err) => {
    console.log('ERROR', err)
  })
}
