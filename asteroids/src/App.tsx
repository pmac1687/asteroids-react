/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
///import GameMenu from './App';

function App() {
    ///const [xCoord, setXCoord] = useState(0);
    ///const [yCoord, setYCoord]
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            const ship = document.getElementById('ship')?.getBoundingClientRect();
            const ships = document.getElementById('ship');

            if (ships) {
                console.log(ships?.style.transform);
            }
            ///const shipAdj = document.getElementById('ship');
            if (ship) {
                console.log(ship);
            }
        }
    });
    const [show, setShow] = useState(true);
    function onClick() {
        setShow(false);
        ///const shipRect = document.getElementById('ship');
        const shipAdj = document.getElementById('ship');
        if (shipAdj) {
            shipAdj.style.display = 'block';
        }
    }
    return (
        <div className="App">
            <GameMenu show={show} onClick={onClick} />
            <Ship />
        </div>
    );
}
export default App;
