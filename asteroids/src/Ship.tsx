/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
////import { useState } from 'react';
///import ReactDOM from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function Ship() {
    const [xCoord, setXCoord] = useState(0);
    const [yCoord, setYCoord] = useState(0);
    const [yOffSet, setYOffSet] = useState(0);
    const [xOffSet, setXOffSet] = useState(0);

    ///const [yOffSet2, setYOffSet2] = useState(0);

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
        const ships = document.getElementById('ship');
        const app = document.getElementById('App');
        if (event.key === 'ArrowDown') {
            if (ships !== null) {
                ships.style.position = 'relative';
                ///const board = document.getElementById('game-board');
                ///setYOffSet2(yOffSet2 - 10);
                /*if (board) {
                    board.style.transform = `translateY(${yOffSet2}px)`;
                }*/
                console.log(app);
                setYOffSet(yOffSet - 40);
                if (app) {
                    app.style.backgroundPositionY = `${yOffSet}px`;
                }
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
            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = xCoord - 30;
                setYOffSet(yOffSet + 40);
                if (app) {
                    app.style.backgroundPositionY = `${yOffSet}px`;
                }
                setXCoord(increase);
                console.log('xcoord after', xCoord);
                ships.style.top = `${increase}px`;
                console.log('inc after adj', increase);
                console.log('top after adj', ships.style.top);
            }
        }
        ///right arrow logic
        if (event.key === 'ArrowRight') {
            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = yCoord + 30;
                setXOffSet(xOffSet - 40);
                if (app) {
                    app.style.backgroundPositionX = `${xOffSet}px`;
                }
                setYCoord(increase);
                console.log('xcoord after', yCoord);
                ships.style.left = `${increase}px`;
                console.log('inc after adj', increase);
                console.log('top after adj', ships.style.top);
            }
        }
        if (event.key === 'ArrowLeft') {
            if (ships !== null) {
                ships.style.position = 'relative';
                const increase = yCoord - 30;
                setXOffSet(xOffSet + 40);
                if (app) {
                    app.style.backgroundPositionX = `${xOffSet}px`;
                }
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
