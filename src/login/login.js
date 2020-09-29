const redirectUri = 'http://localhost:3000/callback';
const url = 'https://accounts.spotify.com/authorize?';

export function login() {
    let scope;
    const str = `${url}client_id='05370ef1a89b443ca4ab31a4c02436ee'&response_type=token&show_dialog=true&scope=${scope}&redirect_uri=${redirectUri}`
    window.open(str, '_blank', "width=600, height=500");
}


