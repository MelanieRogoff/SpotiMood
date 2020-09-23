import React from 'react';
import { Box, CardContent, Card } from '@material-ui/core';

/** 
 * This is a where we display the Happy Spotify playlist, or the Sad Spotify playlist, depending on the mood the user chooses. 
 * Always put this code (jsdoc) at the TOP of our functions (before the functions) so it knows that the information belongs to that function
* @summary Loads on the home screen and will display a Spotify playlist open button click
*/
export function SpotifyBox() {
   
  return (
    <Box>
        <Card> 
            <CardContent> INSERT SPOTIFY BOX HERE</CardContent> {/* Placeholder content */}
        </Card>
    </Box>
  );
}