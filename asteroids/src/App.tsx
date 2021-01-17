/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
import * as ReactDOM from 'react-dom';

///import GameMenu from './App';

function App() {
    ///come in and pass random properties for speen andirection and spawn blah when instantiating
    const [show, setShow] = useState(true);
    const [enemyCount, setEnemyCount] = useState(4);
    const [enemyArray, setEnemyArray] = useState<JSX.Element[]>([<div key="2">hello</div>]);
    const [gameOver, setGameOver] = useState(false);
    ///const hello = ['helllo', 'goodbye', 'bye'];
    function onClick() {
        setShow(false);
        ///const shipRect = document.getElementById('ship');
        const shipAdj = document.getElementById('ship-cont');
        const gMenu = document.getElementById('game-menu');
        gMenu?.remove();
        const gBoard = document.getElementById('game-board');
        if (gBoard) {
            gBoard.style.display = 'block';
        }
        if (shipAdj) {
            shipAdj.remove();
        }
        populateEnenmies();
        startInterval();
    }
    function startInterval() {
        const ids = setInterval(function () {
            moveEnemies(ids);
        }, 18);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function moveEnemies(ids: NodeJS.Timeout) {
        let arr = document.getElementsByClassName('enemy') as HTMLCollectionOf<HTMLElement>;
        setGameOver(true);
        console.log(ids);
        console.log(gameOver);
        /// dont lose this console.log or else prop assign doesnt work?
        let x;
        for (x in arr) {
            const ele = arr[x];
            if (ele !== undefined) {
                console.log('title', ele.title);
                if (getEnemySpeed(ele) === '4') {
                    if (enemyOnScreen(ele, ids, 'right', arr)) {
                        if (ele) {
                            moveEnemyRight(ele);
                        }
                    }
                }
                if (getEnemySpeed(ele) === '-4') {
                    if (enemyOnScreen(ele, ids, 'left', arr)) {
                        if (ele) {
                            moveEnemyLeft(ele);
                        }
                    }
                }
            } else console.log('bad HTMLElement', ele);
        }
        console.log(ids);
        ///return clearInterval(ids);
    }
    function getEnemySpeed(ele: HTMLElement) {
        if (ele.title) {
            return ele.title;
        } else console.log('speed=0, ele.title undefined');
    }
    function enemyOnScreen(
        ele: HTMLElement,
        ids: NodeJS.Timeout,
        direction: string,
        arr: HTMLCollectionOf<HTMLElement>,
    ) {
        if (direction === 'right') {
            if (parseInt(ele.style.left.replace('px', ''), 10) > 1000) {
                console.log(arr);
                ele.remove();
                killEnemyAdd2More();
                ///clearInterval(ids);
                return false;
            } else return true;
        }
        if (direction === 'left') {
            if (parseInt(ele.style.left.replace('px', ''), 10) < -100) {
                ele.remove();
                return false;
            } else return true;
        }
    }
    function killEnemyAdd2More() {
        const cont = document.getElementById('enemy-cont');
        const news = document.createElement('div');
        Object.assign(news.style, {
            left: 0,
            backgroundColor: 'black',
            width: '100px',
            height: '100px',
        });
        Object.assign(news, {
            id: `enemy${enemyCount}`,
            title: '4',
            className: 'enemy',
            key: `${enemyArray.length}`,
        });
        cont?.appendChild(news);
    }
    function moveEnemyLeft(ele: HTMLElement) {
        console.log('before', ele.style);
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) - 10}px`,
        });
        console.log('after', ele.style);
    }
    function moveEnemyRight(ele: HTMLElement) {
        console.log('before', ele.style);
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) + 10}px`,
        });
        console.log('after', ele.style);
    }
    function getRandStartCoords() {
        ///vh=65 is max for randowm generation?
        const leftCoord = Math.floor(Math.random() * 65 + 1);
        const rightCoord = Math.floor(Math.random() * 65 + 1);
        return [leftCoord, rightCoord];
    }
    function getEnemyJSX(leftCoord: number, rightCoord: number) {
        const enemy1 = `enemy${enemyCount}`;
        const enemy2 = `enemy${enemyCount}`;
        let leftSideEnemy = (
            <div
                title="4"
                style={{ backgroundColor: 'blue', left: 0, top: `${leftCoord}vh` }}
                key={enemyArray.length}
                id={enemy1}
                className="enemy"
            >
                hello
            </div>
        );
        let rightSideEnemy = (
            <div
                className="enemy"
                style={{ backgroundColor: 'green', left: 1800, top: `${rightCoord}vh` }}
                key={enemyArray.length + 1}
                id={enemy2}
                title="-4"
            >
                hello
            </div>
        );
        return [leftSideEnemy, rightSideEnemy];
    }
    function populateEnenmies() {
        const arr = enemyArray;
        const [leftCoord, rightCoord] = getRandStartCoords();
        const [leftSideEnemy, rightSideEnemy] = getEnemyJSX(leftCoord, rightCoord);
        arr.push(leftSideEnemy);
        arr.push(rightSideEnemy);
        ReactDOM.render([leftSideEnemy, rightSideEnemy], document.getElementById('enemy-cont'));
        setEnemyCount(enemyCount + 2);
        setEnemyArray(arr);
    }
    return (
        <div id="App" className="App">
            <div id="game-menu">
                <GameMenu show={show} onClick={onClick} />
            </div>
            <div id="game-board">
                <Ship />
                <div id="enemy-cont"></div>
            </div>
        </div>
    );
}
export default App;
