/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
////import { useState } from 'react';
///import ReactDOM from 'react';
import { useEffect, useRef } from 'react';
import './App.css';

function Ship() {
    ///const [yOffSet, setYOffSet] = useState(0);
    ///const [xOffSet, setXOffSet] = useState(0);
    ///const [yCoord, setYCoord] = useState(500);
    ///const [xCoord, setXCoord] = useState(200);
    const xOffSet = useRef(0);
    const xCoord = useRef(100);
    ///const xCoord2 = useRef(300)
    const yCoord = useRef(-300);
    ///const yCoord2 = useRef(575);
    const yOffSet = useRef(0);
    ///const [yOffSet, setYOffSet2] = useState(0);

    useEffect(() => {
        window.addEventListener('keydown', moveShip);
        console.log(2);

        return function cleanup() {
            window.removeEventListener('keydown', moveShip);
        };
    }, [xCoord.current, yCoord.current]);
    const moveShip = (event: KeyboardEvent) => {
        ///down arrow logic
        const ships = document.getElementById('ship');
        const app = document.getElementById('App');
        if (event.key === 'ArrowDown') {
            if (ships !== null) {
                ///yCoord should increase Yoffset should decrease
                yOffSet.current -= 30;
                if (app) {
                    app.style.position = 'relative';
                    app.style.backgroundPositionY = `${yOffSet.current}px`;
                }
                yCoord.current += 30;
                if (ships) {
                    ships.style.position = 'relative';
                    ships.style.top = `${yCoord.current}px`;
                }
            }
        }
        ///up arrow logic
        if (event.key === 'ArrowUp') {
            if (ships !== null) {
                ///yCoord should decrease yOffset increase
                yOffSet.current += 30;
                if (app) {
                    app.style.position = 'relative';
                    app.style.backgroundPositionY = `${yOffSet.current}px`;
                }
                yCoord.current -= 30;
                if (ships) {
                    ships.style.position = 'relative';
                    ships.style.top = `${yCoord.current}px`;
                }
            }
        }
        ///right arrow logic
        if (event.key === 'ArrowRight') {
            if (ships !== null) {
                ///xCoord should increase xOffset decrease
                xOffSet.current -= 30;
                if (app) {
                    app.style.position = 'relative';
                    app.style.backgroundPositionX = `${xOffSet.current}px`;
                }
                xCoord.current += 30;
                if (ships) {
                    ships.style.position = 'relative';
                    ships.style.left = `${xCoord.current}px`;
                }
            }
        }
        if (event.key === 'ArrowLeft') {
            if (ships !== null) {
                ///xCoord should decrease xOffset increase
                xOffSet.current += 30;
                if (app) {
                    app.style.position = 'relative';
                    app.style.backgroundPositionX = `${xOffSet.current}px`;
                }
                xCoord.current -= 30;
                if (ships) {
                    ships.style.position = 'relative';
                    ships.style.left = `${xCoord.current}px`;
                }
            }
        }
    };
    return <div id="ship">hello</div>;
}
export default Ship;
