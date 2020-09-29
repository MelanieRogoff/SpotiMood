import React from 'react';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { Box, IconButton } from '@material-ui/core';
import './smiley.scss';
import { happySongSearch, sadSongSearch } from '../../helpers/spotify/songSearch/index';

/** 
* @summary Displays happy and sad emojis as icon buttons and emits an event upon click
*/
export function Smiley() {
    return (
        <Box className='smiley-container'>
            <IconButton onClick={happySongSearch}> 
                <MoodIcon id="happy-icon"></MoodIcon>
            </IconButton>

            <IconButton>
                <MoodBadIcon onClick={sadSongSearch} id="sad-icon"></MoodBadIcon>
            </IconButton>
        </Box>
    );
}