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
        <Box className="homeScreen">
            <Typography variant='h4' className={'headers'}>SpotiMood</Typography>
            
            <Box id="login-box"> 
                <Button id="login-btn">Log in with Spotify!</Button> {/* Will be adding onClick={() => login()} */}
            </Box>

            <Typography variant='h6' className={'headers'}>Pick a mood below in order to view your customized Spotify playlist!</Typography>
        
            <Smiley/>
            <SpotifyBox/>
        </Box>
    );
}
