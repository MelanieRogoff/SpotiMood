import React from 'react';
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';

export function Smiley() {

    function ahh() {
        alert('Sad');
    }
    function woo() {
        alert('YAY!');
    }
    return (
        <div id="hi">
            <MoodIcon className="iconBtn" onClick={woo} color="primary"></MoodIcon>
            <MoodBadIcon className="iconBtn" onClick={ahh} color="primary"></MoodBadIcon>
        </div>
    )
}