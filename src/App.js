import React from 'react';
import './App.scss';
import Smiley from './components/Smiley/Smiley';
import SpotifyBox from './components/SpotifyBox/SpotifyBox'

function App() {
  return (
    <div className="App">
        <h1>SpotiMood</h1>
        <h4>Pick a mood below in order to view your customized Spotify playlist!</h4>
        <Smiley></Smiley>
        <SpotifyBox></SpotifyBox>
    </div>
  );
}

export default App;
