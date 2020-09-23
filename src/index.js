import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HomeScreen } from './screens/homeScreen'

ReactDOM.render(
  <React.StrictMode>
    <HomeScreen /> {/* HomeScreen is the same as App.js */}
  </React.StrictMode>,
  document.getElementById('root')
);
