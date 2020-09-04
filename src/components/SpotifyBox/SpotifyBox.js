import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import purple from '@material-ui/core/colors/purple';
/** 
 * This is a where we display the Happy Spotify playlist, or the Sad Spotify playlist, depending on the mood the user chooses. 
 * Always put this code (jsdoc) at the TOP of our functions (before the functions) so it knows that the information belongs to that function
* @summary Loads on the home screen and will display a Spotify playlist open button click
*/

export function SpotifyBox() {
   
  return (
    <Container align='center'>
        <Card> 
            <CardContent> INSERT SPOTIFY BOX HERE</CardContent> {/* Placeholder content */}
        </Card>
    </Container>
  );
}