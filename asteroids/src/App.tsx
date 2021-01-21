/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useRef, useState } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
///import GameMenu from './App';

function App() {
    ///come in and pass random properties for speen andirection and spawn blah when instantiating
    const [show, setShow] = useState(true);
    ///const [enemyCount, setEnemyCount] = useState(4);
    const counts = useRef(0);
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
        }
        populateEnenmies();
        startInterval();
    }
    function startInterval() {
        const ids = setInterval(function () {
            moveEnemies(ids);
            ///clearInterval(ids);
        }, 18);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    function moveEnemies(_ids: NodeJS.Timeout) {
        let arr = document.getElementsByClassName('enemy') as HTMLCollectionOf<HTMLElement>;
        let x;
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
            if (parseInt(ele.style.left.replace('px', ''), 10) > 1500) {
                ele.remove();
                if (document.getElementsByClassName('enemy').length < 10) {
                    populateEnenmies();
                } else clearInterval(_ids);
                ///clearInterval(ids);
                return false;
            } else return true;
        }
        if (direction === 'left') {
            if (parseInt(ele.style.left.replace('px', ''), 10) < 450) {
                ele.remove();
                if (document.getElementsByClassName('enemy').length < 10) {
                    populateEnenmies();
                } else clearInterval(_ids);
                return false;
            } else return true;
        }
    }
    function moveEnemyLeft(ele: HTMLElement) {
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) - 5}px`,
            right: `${parseInt(ele.style.right, 10) - 5}px`,
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
        const leftCoord = Math.floor(Math.random() * (500 - 1) + 1);
        const rightCoord = Math.floor(Math.random() * (500 - 1) + 1);
        return [leftCoord, rightCoord];
    }
    function getRandSize() {
        const leftSize = Math.floor(Math.random() * (30 - 5) + 5);
        const rightSize = Math.floor(Math.random() * (30 - 5) + 5);
        return [leftSize, rightSize];
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
            backgroundColor: 'black',
            width: `${eSize1[0]}px`,
            height: `${eSize1[1]}px`,
            position: 'fixed',
            left: '1400px',
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
            backgroundColor: 'black',
            width: `${eSize2[0]}px`,
            height: `${eSize2[1]}px`,
            position: 'fixed',
            left: '200px',
            top: `${top2}px`,
            right: `${200 + eSize2[0]}px`,
            bottom: `${top2 + eSize2[1]}px`,
        });

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
                <div id="game-menu">
                    <GameMenu show={show} onClick={onClick} />
                </div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board">
                    <div id="game-board2"></div>
                    <Ship />
                </div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
                <div id="game-board-border"></div>
            </div>
        </div>
    );
}
export default App;
