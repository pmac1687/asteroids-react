/* eslint-disable react/react-in-jsx-scope */
///import React, { useState } from 'react';
///import ReactDOM from 'react';
import './App.css';

function Ship() {
    ///const [xCoord, setXCoord] = useState(0);
    ///const [yCoord, setYCoord]
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            const ships = document.getElementById('ship');
            if (ships && parseInt(ships.style.bottom.replace('px', ''), 10) < window.innerHeight) {
                ships.style.position = 'relative';
                console.log(ships.style.top);
                ///const top = ships.style.top.replace('px', '');
                ///const tops = parseInt(top, 10);
                ships.style.top += '30px';
            }
        }
    });
    return (
        <div id="ship-cont">
            <div id="ship">hello</div>
        </div>
    );
}
export default Ship;
