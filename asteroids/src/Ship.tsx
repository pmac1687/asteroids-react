/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
////import { useState } from 'react';
///import ReactDOM from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function Ship() {
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    useEffect(() => {
        window.addEventListener('keydown', moveShip);
        console.log(2);

        return function cleanup() {
            window.removeEventListener('keydown', moveShip);
        };
    }, [xCoord, yCoord]);
    const moveShip = (event: KeyboardEvent) => {
        console.log(event.key);
        ///down arrow logic
        if (event.key === 'ArrowDown') {
            const ships = document.getElementById('ship');

            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = xCoord + 30;
                setXCoord(increase);
                console.log('xcoord after', xCoord);
                ships.style.top = `${increase}px`;
                console.log('inc after adj', increase);
                console.log('top after adj', ships.style.top);
            }
        }
        ///up arrow logic
        if (event.key === 'ArrowUp') {
            const ships = document.getElementById('ship');

            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = xCoord - 30;
                setXCoord(increase);
                console.log('xcoord after', xCoord);
                ships.style.top = `${increase}px`;
                console.log('inc after adj', increase);
                console.log('top after adj', ships.style.top);
            }
        }
        ///right arrow logic
        if (event.key === 'ArrowRight') {
            const ships = document.getElementById('ship');

            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = yCoord + 30;
                setYCoord(increase);
                console.log('xcoord after', yCoord);
                ships.style.left = `${increase}px`;
                console.log('inc after adj', increase);
                console.log('top after adj', ships.style.top);
            }
        }
        if (event.key === 'ArrowLeft') {
            const ships = document.getElementById('ship');

            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = yCoord - 30;
                setYCoord(increase);
                console.log('xcoord after', yCoord);
                ships.style.left = `${increase}px`;
                console.log('inc after adj', increase);
                console.log('top after adj', ships.style.top);
            }
        }
    };
    return (
        <div title="hello" id="ship-cont">
            <div id="ship">hello</div>
        </div>
    );
}
export default Ship;
