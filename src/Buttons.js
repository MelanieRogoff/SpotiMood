import React from 'react';

function Buttons() {

    function ahh() {
        alert('So much sadness');
    }
    function woo() {
        alert('YAY!');
    }
    return (
        <div>
           <span className="spotify-launch-btns" role="img" onClick={woo} aria-label="smiley">😄</span>
           <span className="spotify-launch-btns" role="img" onClick={ahh} aria-label="sad">😞</span>
        </div>
    )
}

export default Buttons;
