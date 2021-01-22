/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
////import { useState } from 'react';
///import ReactDOM from 'react';
import { MutableRefObject } from 'react';
import { useEffect } from 'react';
import './App.css';

type ShipProps = {
    speed: MutableRefObject<number[]>;
    offSet: MutableRefObject<number[]>;
    xCoord: MutableRefObject<number>;
    yCoord: MutableRefObject<number>;
};
function Ship({ speed, offSet, xCoord, yCoord }: ShipProps) {
    ///const [offSet, setoffSet] = useState(0);
    ///const [xOffSet, setXOffSet] = useState(0);
    ///const [yCoord, setYCoord] = useState(500);
    ///const [xCoord, setXCoord] = useState(200);
    ///const xCoord2 = useRef(300)
    ///const yCoord2 = useRef(575);
    ///const [offSet, setoffSet2] = useState(0);
    useEffect(() => {
        window.addEventListener('keydown', moveShip);
        console.log(2);

        return function cleanup() {
            window.removeEventListener('keydown', moveShip);
        };
    }, [xCoord.current, yCoord.current]);
    useEffect(() => {
        window.addEventListener('keyup', decel);
        console.log(2);

        return function cleanup() {
            window.removeEventListener('keyup', moveShip);
        };
    }, [xCoord.current, yCoord.current]);
    const decel = (event: KeyboardEvent) => {
        if (event.code === 'ArrowDown') {
            speed.current[1] = 6;
        }
        if (event.code === 'ArrowUp') {
            speed.current[1] = -6;
        }
        if (event.code === 'ArrowLeft') {
            speed.current[0] = -6;
        }
        if (event.code === 'ArrowRight') {
            speed.current[1] = -6;
        }
    };
    const moveShip = (event: KeyboardEvent) => {
        ///down arrow logic
        const ships = document.getElementById('ship');
        const app = document.getElementById('App');
        if (event.key === 'ArrowDown') {
            if (ships !== null) {
                ///yCoord should increase offSet should decrease
                ///offSet.current -= 30;
                if (app) {
                    app.style.position = 'relative';
                    offSet.current[1] -= 30;
                    app.style.backgroundPositionY = `${offSet.current[1]}px`;
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
                ///yCoord should decrease offSet should increase
                ///offSet.current -= 30;
                if (app) {
                    app.style.position = 'relative';
                    offSet.current[1] += 30;
                    app.style.backgroundPositionY = `${offSet.current[1]}px`;
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
                ///xCoord should increase Xoffset should decrease
                ///offSet.current -= 30;
                if (app) {
                    app.style.position = 'relative';
                    offSet.current[0] -= 30;
                    app.style.backgroundPositionX = `${offSet.current[0]}px`;
                }
                xCoord.current += 30;
                if (ships) {
                    ships.style.position = 'relative';
                    ships.style.left = `${xCoord.current}px`;
                }
            }
        }
        ///left arrow key press
        if (event.key === 'ArrowLeft') {
            if (ships !== null) {
                ///xCoord should decrease Xoffset should increase
                ///offSet.current -= 30;
                if (app) {
                    app.style.position = 'relative';
                    offSet.current[0] += 30;
                    app.style.backgroundPositionX = `${offSet.current[0]}px`;
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
