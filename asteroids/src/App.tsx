/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { MutableRefObject, useRef, useState } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
///import GameMenu from './App';
import shipAll from './images/Spaceship_all.png';

const colors = ['#08F7FE', '#09FBD3', '#7122FA', '#FF2281', '#011FFD', '#FDF200', '#13CA91', '#FFFF66'];

export default function App() {
    ///come in and pass random properties for speen andirection and spawn blah when instantiating
    const [show, setShow] = useState(true);
    ///const [enemyCount, setEnemyCount] = useState(4);
    const counts = useRef(0);
    const speed = useRef([0, 0]);
    const offSet = useRef([0, 0]);
    const yCoord = useRef(-300);
    const xCoord = useRef(100);
    const timer = useRef(0);
    const ind = useRef(0);
    const [clock, setClock] = useState(0);
    ///const xOffSet = useRef(0);
    ///const [enemyArray, setEnemyArray] = useState<JSX.Element[]>([<div key="2">hello</div>]);
    ///const hello = ['helllo', 'goodbye', 'bye'];
    function onClick() {
        setShow(false);
        ///const shipRect = document.getElementById('ship');
        const shipAdj = document.getElementById('ship');
        const gMenu = document.getElementById('game-menu');
        const app = document.getElementById('App');
        const gBoard = document.getElementById('game-board');
        const border = document.getElementById('game-board-border');
        if (border) {
            border.style.display = 'block';
        }
        if (app) {
            app.style.display = 'grid';
            app.style.backgroundImage =
                'url(https://wonderfulengineering.com/wp-content/uploads/2014/04/space-wallpapers-15.jpg)';
            app.style.gridTemplateColumns = 'auto auto auto';
            app.style.gridTemplateRows = 'auto auto auto';
            app.style.position = 'relative';
            ///app.style.opacity = '.1';
            ///app.style.gridTemplateAreas = '... .board. ...';
        }
        if (gMenu) {
            gMenu.remove();
        }
        if (gBoard) {
            gBoard.style.display = 'block';
        }
        if (shipAdj) {
            shipAdj.style.display = 'block';
            shipAdj.style.position = 'relative';
            shipAdj.style.top = '-300px';
            shipAdj.style.left = '100px';
            shipAdj.style.backgroundImage = `url(${shipAll})`;
        }
        populateEnenmies();
        startInterval();
    }
    function startInterval() {
        const ids = setInterval(function () {
            moveEnemies(ids);
            if (speed.current[1] !== 0) {
                console.log('speed', speed.current[1]);
                ///decelShip();
                console.log(document.getElementById('ship'));
                console.log('sp', speed.current[1]);
            }
            timer.current += 1;
            if (timer.current % 50 === 0) {
                setClock(timer.current / 50);
            }
            ///clearInterval(ids);
        }, 18);
    }
    /*function decelShip() {
        console.log(blah);
        ///decel the ship in direction of keydown
        const ship = document.getElementById('ship')?.style;
        const app = document.getElementById('App')?.style;
        console.log(app);
        if (ship) {
            ///for yCoord
            ship.position = 'relative';
            yCoord.current += (speed.current[1] % 2) * 10;
            ship.top = `${yCoord.current}px`;
            ///for xCoord
            xCoord.current += (speed.current[0] % 2) * 10;
            ship.left = `${xCoord.current}px`;
        }
        if (app) {
            ///offest in y direction
            app.position = 'relative';
            offSet.current[1] -= (speed.current[1] % 2) * 10;
            app.top = `${offSet.current[1]}px`;
            ///OFFSET x direction
            offSet.current[1] -= (speed.current[1] % 2) * 10;
            app.top = `${offSet.current[1]}px`;
        }
        speed.current[1] += speed.current[1] > 0 ? -1 : 1;
    }*/
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function moveEnemies(_ids: NodeJS.Timeout) {
        let arr = document.getElementsByClassName('enemy') as HTMLCollectionOf<HTMLElement>;
        let x;
        console.log('speed', speed.current[1]);
        if (arr) {
            for (x in arr) {
                /*if (arr.length > 10) {
                    clearInterval(ids);
                }*/
                const ele = arr[x];
                if (ele !== undefined) {
                    if (ele.title !== undefined) {
                        console.log(ele.style.right);

                        if (getEnemySpeed(ele) === '4') {
                            if (enemyOnScreen(ele, 'right', _ids)) {
                                if (ele) {
                                    moveEnemyRight(ele);
                                    checkForCollision(ele, _ids);
                                }
                            }
                        }
                        if (getEnemySpeed(ele) === '-4') {
                            if (enemyOnScreen(ele, 'left', _ids)) {
                                if (ele) {
                                    moveEnemyLeft(ele);
                                    checkForCollision(ele, _ids);
                                }
                            }
                        }
                    }
                }
            }
        }
        setShow(true);
        ///return clearInterval(ids);
    }
    function checkForCollision(ele: HTMLElement, _ids: NodeJS.Timeout) {
        console.log(ele);
        const ship = document.getElementById('ship');
        if (ship) {
            const shipRect = ship.getBoundingClientRect();
            if (ele) {
                const enemyRect = ele.getBoundingClientRect();
                const checkColl = !(
                    shipRect.right < enemyRect.left ||
                    shipRect.left > enemyRect.right ||
                    shipRect.bottom < enemyRect.top ||
                    shipRect.top > enemyRect.bottom
                );
                if (checkColl) {
                    console.log('colllision!!!', ele, ship);
                    clearInterval(_ids);
                }
            }
        }
    }
    function getEnemySpeed(ele: HTMLElement) {
        if (ele.title) {
            return ele.title;
        }
    }
    function enemyOnScreen(ele: HTMLElement, direction: string, _ids: NodeJS.Timeout) {
        if (direction === 'right') {
            if (parseInt(ele.style.left.replace('px', ''), 10) > 1350) {
                ele.remove();
                if (document.getElementsByClassName('enemy').length < 17) {
                    populateEnenmies();
                }
                ///clearInterval(ids);
                return false;
            } else return true;
        }
        if (direction === 'left') {
            if (parseInt(ele.style.left.replace('px', ''), 10) < 300) {
                ele.remove();
                if (document.getElementsByClassName('enemy').length < 17) {
                    populateEnenmies();
                }
                return false;
            } else return true;
        }
    }
    function moveEnemyLeft(ele: HTMLElement) {
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) - 7}px`,
            right: `${parseInt(ele.style.right, 10) - 7}px`,
        });
    }
    function moveEnemyRight(ele: HTMLElement) {
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) + 5}px`,
            right: `${parseInt(ele.style.right, 10) + 5}px`,
        });
    }
    function getRandStartCoords() {
        ///vh=65 is max for randowm generation?
        const leftCoord = Math.floor(Math.random() * (700 - 130) + 130);
        const rightCoord = Math.floor(Math.random() * (700 - 130) + 130);
        return [leftCoord, rightCoord];
    }
    function getRandSize() {
        const leftSize = Math.floor(Math.random() * (30 - 5) + 5);
        const rightSize = Math.floor(Math.random() * (30 - 5) + 5);
        return [leftSize, rightSize];
    }
    function reset() {
        window.location.reload();
    }
    function showCode() {
        window.location.href = 'https://github.com/pmac1687/asteroids-react/tree/master/asteroids';
    }
    function getEnemyJSX() {
        const enemy1 = `enemy${counts.current}`;
        const enemy2 = `enemy${counts.current + 1}`;
        const leftSideEnemy = document.createElement('div');
        const eSize1 = getRandSize();
        const eSize2 = getRandSize();
        const top1 = getRandStartCoords()[0];
        const top2 = getRandStartCoords()[0];
        Object.assign(leftSideEnemy, {
            id: { enemy1 },
            title: '-4',
            className: 'enemy',
            key: { enemy1 },
        });
        Object.assign(leftSideEnemy.style, {
            backgroundColor: colors[ind.current],
            width: `${eSize1[0]}px`,
            height: `${eSize1[1]}px`,
            position: 'fixed',
            left: '1350px',
            top: `${top1}px`,
            right: `${200 + eSize1[0]}px`,
            bottom: `${top2 + eSize1[1]}px`,
        });
        const rightSideEnemy = document.createElement('div');
        Object.assign(rightSideEnemy, {
            id: { enemy2 },
            title: '4',
            className: 'enemy',
            key: { enemy2 },
        });
        Object.assign(rightSideEnemy.style, {
            backgroundColor: colors[ind.current + 1],
            width: `${eSize2[0]}px`,
            height: `${eSize2[1]}px`,
            position: 'fixed',
            left: '300px',
            top: `${top2}px`,
            right: `${200 + eSize2[0]}px`,
            bottom: `${top2 + eSize2[1]}px`,
        });
        if (ind.current === 8) {
            ind.current = 0;
        } else ind.current += 2;

        return [leftSideEnemy, rightSideEnemy];
    }
    function populateEnenmies() {
        const cont = document.getElementById('game-board2');
        ///setEnemyCount(document.getElementsByClassName('enemy').length);
        const [leftSideEnemy, rightSideEnemy] = getEnemyJSX();
        cont?.appendChild(leftSideEnemy);
        cont?.appendChild(rightSideEnemy);
        counts.current += 2;
        console.log('count of enemy inc', counts);
        console.log('enemy count pop enemy', counts);
    }
    return (
        <div className="App">
            <div id="App">
                <div id="code"></div>
                <div id="game-menu">
                    <GameMenu show={show} onClick={onClick} />
                </div>
                <div id="game-board-border"></div>
                <div id="game-board-border-title">ASTEROIDS</div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board">
                    <div id="game-board2"></div>
                    <Ship offSet={offSet} yCoord={yCoord} xCoord={xCoord} speed={speed} />
                </div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board-border-timer">{clock}</div>
                <div style={{ display: 'grid' }} id="game-board-border">
                    <button onClick={showCode} className="big-button">
                        See Code
                    </button>
                    <button onClick={reset} className="big-button">
                        Reset Game
                    </button>
                </div>
            </div>
        </div>
    );
}

export declare interface AppProps {
    speed: MutableRefObject<number[]>;
    offSet: MutableRefObject<number[]>;
    yCoord: MutableRefObject<number>;
    xCoord: MutableRefObject<number>;
}
