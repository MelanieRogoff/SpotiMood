import React from 'react';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Container, IconButton } from '@material-ui/core';

/** 
 * This is a where we create emojis and turn them into buttons.
* @summary Displays happy and sad emojis as icon buttons and emits an event upon click
*/

export function Smiley() {

    function ahh() {
        alert('Sad');
    }
    function woo() {
        alert('YAY!');
    }
    return (
        <Container align='center'>
            <IconButton onClick={woo}> {/* Putting onClick here so it'll trigger the event */}
                <MoodIcon className="iconBtn" color="primary"></MoodIcon>
            </IconButton>

            <IconButton onClick={ahh}>
                <MoodBadIcon className="iconBtn" color="primary"></MoodBadIcon>
            </IconButton>
        </Container>
    )
}