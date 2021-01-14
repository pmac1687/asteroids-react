/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
import Enemy from './Enemy';
import { ReactElement } from 'react';
///import GameMenu from './App';

function App() {
    ///come in and pass random properties for speen andirection and spawn blah when instantiating
    const [show, setShow] = useState(true);
    const [enemyCount, setEnemyCount] = useState(4);
    const [enemyArray, setEnemyArray] = useState<Array<ReactElement>>([]);
    ///const hello = ['helllo', 'goodbye', 'bye'];
    function onClick() {
        setShow(false);
        ///const shipRect = document.getElementById('ship');
        const shipAdj = document.getElementById('ship-cont');
        if (shipAdj) {
            shipAdj.style.display = 'none';
        }
        populateEnenmies();
    }
    function populateEnenmies() {
        const arr = enemyArray;
        const leftCoord = Math.floor(Math.random() * 100 + 1);
        const rightCoord = Math.floor(Math.random() * 100 + 1);
        console.log(rightCoord);
        console.log('left', leftCoord);
        console.log(window.innerWidth);
        const leftSideEnemy = (
            <div title="-4" style={{ backgroundColor: 'blue', left: 1820, top: 630 }} key={enemyCount - 1} id="enemy">
                hello
            </div>
        );
        const rightSideEnemy = (
            <div style={{ backgroundColor: 'green' }} key={enemyCount} id="enemy">
                hello
            </div>
        );
        console.log(leftSideEnemy);
        enemyArray?.push(leftSideEnemy);
        enemyArray?.push(rightSideEnemy);
        console.log(leftSideEnemy);
        /*for (let x = 0; x < 2; x++) {
            const enemy = (
                <div style={{ backgroundColor: 'blue' }} key={x} id="enemy">
                    hello
                </div>
            );
            if (arr) {
                arr.push(enemy);
            }
        }*/
        console.log(arr);
        setEnemyCount(2);
        setEnemyArray(arr);
    }
    return (
        <div id="App" className="App">
            <GameMenu show={show} onClick={onClick} />
            <Ship />
            <div>
                {enemyArray?.map((item, index) => {
                    return <div key={index}>{item}</div>;
                })}
            </div>
            <Enemy />
        </div>
    );
}
export default App;
