/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { ReactElement } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
import Enemy from './Enemy';
///import GameMenu from './App';

function App() {
    ///come in and pass random properties for speen andirection and spawn blah when instantiating
    const [show, setShow] = useState(true);
    const [enenmyCount, setEnemyCount] = useState(3);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [enemyArray, setEnemyArray] = useState<Array<ReactElement>>();
    ///const hello = ['helllo', 'goodbye', 'bye'];
    function onClick() {
        setShow(false);
        ///const shipRect = document.getElementById('ship');
        const shipAdj = document.getElementById('ship-cont');
        if (shipAdj) {
            shipAdj.style.display = 'none';
        }
        startGameLoop();
    }
    function startGameLoop() {
        console.log(<div>hello</div>);
        const enemies = [];
        for (let x = 0; x < enenmyCount; x++) {
            const enemy = <Enemy key={`${x}`} />;
            enemies.push(enemy);
        }
        setEnemyArray(enemies); ///[<div key={1}>hello</div>, <div key={2}>goodbye</div>]);
        console.log(enemyArray);
        setEnemyCount(4);
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
        </div>
    );
}
export default App;
