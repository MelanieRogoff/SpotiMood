import React from 'react';
import './HomeScreen.scss';
import {Smiley, SpotifyBox} from '../../components';
import { Container, Typography } from '@material-ui/core';

/**
 * HomeScreen
 * @summary Loads the home screen with a smiley and spotifyBox component
 */
export function HomeScreen() {
  return (
    // I have removed the usage of any DOM primitives since we are using material-UI.
    // we can utilize all their components instead of using the DOM primitives. for consistency
    // we should look into setting up Material-UI themes at some point. so all our components will share a global theme
    <Container className="homeScreen">
      <Typography variant='h4' align='center'>SpotiMood</Typography>
      <Typography variant='h6' align='center'>
        Pick a mood below in order to view your customized Spotify playlist!
      </Typography>
        {/* 
          for any components you setup that does not have any children (aka other components in between them) 
          we can just call the component like this. there's 0 performance boost, but its less things to read on the screen
        */}
      <Smiley/>
      <SpotifyBox/>
    </Container>
  );
}
