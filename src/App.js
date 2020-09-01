import React from 'react';
import './App.scss';
import Buttons from './Buttons';

function App() {
  return (
    <div className="App">
        <h1>SpotiMood</h1>
        <h3>Pick a mood below in order to view your customized Spotify playlist!</h3>
        <div className="emoji">
            <Buttons></Buttons>
        </div>
    </div>
  );
}

export default App;
