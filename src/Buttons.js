import React from 'react';

import './App';

function Buttons() {

    function ahh() {
        alert('So much sadness');
    }
    function woo() {
        alert('YAY!');
    }
    return (
        <div>
           <span className="btns" role="img" onClick={woo} aria-label="smiley">😄</span>
           <span className="btns" role="img" onClick={ahh} aria-label="sad">😞</span>
        </div>
    )
}

export default Buttons;
