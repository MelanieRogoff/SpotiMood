import React from 'react';
import './homeScreen.scss';
import { Smiley, SpotifyBox} from '../../components'; //we can group the imports because we did the named export and exported all of the components from the index.js , which makes our imports cleaner 
import { Box, Typography, Button } from '@material-ui/core';

/**
 * HomeScreen -- this replaces App.js
 * @summary Loads the home screen with a smiley and spotifyBox component
 */
export function HomeScreen() {
  return (
    // Use Material-UI instead of DOM primitives (ie: div, etc)
    <Box className="homeScreen">
        <Typography variant='h4' className={'headers'}>SpotiMood</Typography>
        
        <a href="http://localhost:8888">
            <Button id="login-btn">Log in with Spotify!</Button>
        </a>

        <Typography variant='h6' className={'headers'}>Pick a mood below in order to view your customized Spotify playlist!</Typography>
        {/* 
          for any components that don't have children (aka other components in between them) 
          we can just call the component like this. there's 0 performance boost, but its less things to read on the screen
        */}
      <Smiley/>
      <SpotifyBox/>
    </Box>
  );
}
