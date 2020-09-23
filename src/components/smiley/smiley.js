import React from 'react';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Box, IconButton } from '@material-ui/core';
import './smiley.scss';

function ahh() {
    alert('Sad');
}
function woo() {
    alert('YAY!');
}

/** 
 * This is a where we create emojis and turn them into buttons.
* @summary Displays happy and sad emojis as icon buttons and emits an event upon click
*/
export function Smiley() {
    return (
        <Box className='smiley-container'>
            <IconButton onClick={woo}> {/* Putting onClick here so it'll trigger the event */}
                <MoodIcon id="happy-icon"></MoodIcon>
            </IconButton>

            <IconButton onClick={ahh}>
                <MoodBadIcon id="sad-icon"></MoodBadIcon>
            </IconButton>
        </Box>
    );
}