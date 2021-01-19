/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
///import ReactDOM from 'react';
import './App.css';
import GameMenu from './GameMenu';
import Ship from './Ship';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ParallaxMouseMove from 'react-parallax-mousemove';
import space from './images/space.jpeg';
import dMap from './images/depth-mapOP85.jpg';
///import GameMenu from './App';

function App() {
    ///come in and pass random properties for speen andirection and spawn blah when instantiating
    const [show, setShow] = useState(true);
    const [enemyCount, setEnemyCount] = useState(4);
    ///const [enemyArray, setEnemyArray] = useState<JSX.Element[]>([<div key="2">hello</div>]);
    ///const hello = ['helllo', 'goodbye', 'bye'];
    function onClick() {
        setShow(false);
        ///const shipRect = document.getElementById('ship');
        const shipAdj = document.getElementById('ship-cont');
        const gMenu = document.getElementById('game-menu');
        const app = document.getElementById('App');
        const app2 = document.getElementById('App2');
        const app3 = document.getElementById('App3');
        const gBoard = document.getElementById('game-board');
        const border = document.getElementById('game-board-border');
        if (border) {
            border.style.display = 'block';
        }
        if (app2) {
            app2.style.backgroundImage = `url(${space})`;
        }
        if (app3) {
            app3.style.backgroundImage = `url(${dMap})`;
        }
        if (app) {
            app.style.display = 'grid';
            app.style.backgroundImage = `url(${space})`;
            app.style.gridTemplateColumns = 'auto auto auto';
            app.style.gridTemplateRows = 'auto auto auto';
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
            shipAdj.style.placeSelf = 'center';
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
    function moveEnemies(ids: NodeJS.Timeout) {
        let arr = document.getElementsByClassName('enemy') as HTMLCollectionOf<HTMLElement>;
        console.log(arr.length);
        console.log('ids ignore ', ids);
        let x;
        if (arr) {
            for (x in arr) {
                /*if (arr.length > 10) {
                    clearInterval(ids);
                }*/
                const ele = arr[x];
                if (ele !== undefined) {
                    if (ele.title !== undefined) {
                        if (getEnemySpeed(ele, ids) === '4') {
                            if (enemyOnScreen(ele, ids, 'right', arr)) {
                                if (ele) {
                                    moveEnemyRight(ele);
                                }
                            }
                        }
                        if (getEnemySpeed(ele, ids) === '-4') {
                            if (enemyOnScreen(ele, ids, 'left', arr)) {
                                if (ele) {
                                    moveEnemyLeft(ele);
                                }
                            }
                        }
                    }
                }
            }
        }
        console.log('ids ignore', ids);
        ///return clearInterval(ids);
    }
    function getEnemySpeed(ele: HTMLElement, ids: NodeJS.Timeout) {
        if (ele.title) {
            return ele.title;
        } else {
            console.log(ids);
            ///clearInterval(ids);
        }
    }
    function enemyOnScreen(
        ele: HTMLElement,
        ids: NodeJS.Timeout,
        direction: string,
        arr: string | [] | HTMLCollectionOf<HTMLElement>,
    ) {
        if (direction === 'right') {
            if (parseInt(ele.style.left.replace('px', ''), 10) > 1500) {
                ele.remove();
                console.log(ids);
                if (arr.length < 50) {
                    populateEnenmies();
                }
                ///clearInterval(ids);
                return false;
            } else return true;
        }
        if (direction === 'left') {
            if (parseInt(ele.style.left.replace('px', ''), 10) < 450) {
                ele.remove();
                if (arr.length < 50) {
                    populateEnenmies();
                }
                return false;
            } else return true;
        }
    }
    function moveEnemyLeft(ele: HTMLElement) {
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) - 5}px`,
        });
    }
    function moveEnemyRight(ele: HTMLElement) {
        Object.assign(ele.style, {
            left: `${parseInt(ele.style.left, 10) + 5}px`,
        });
    }
    function getRandStartCoords() {
        ///vh=65 is max for randowm generation?
        const leftCoord = Math.floor(Math.random() * (80 - 10) + 10);
        const rightCoord = Math.floor(Math.random() * (70 - 10) + 10);
        return [leftCoord, rightCoord];
    }
    function getEnemyJSX() {
        const enemy1 = `enemy${enemyCount}`;
        const enemy2 = `enemy${enemyCount + 1}`;
        const leftSideEnemy = document.createElement('div');
        Object.assign(leftSideEnemy, {
            id: { enemy1 },
            title: '-4',
            className: 'enemy',
            key: { enemy1 },
        });
        Object.assign(leftSideEnemy.style, {
            backgroundColor: 'black',
            width: '10px',
            height: '10px',
            position: 'fixed',
            left: '1400px',
            top: `${getRandStartCoords()[0]}%`,
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
            width: '10px',
            height: '10px',
            position: 'fixed',
            left: '200px',
            top: `${getRandStartCoords()[0]}%`,
        });

        return [leftSideEnemy, rightSideEnemy];
    }
    function populateEnenmies() {
        const cont = document.getElementById('game-board');
        setEnemyCount(document.getElementsByClassName('enemy').length);
        const [leftSideEnemy, rightSideEnemy] = getEnemyJSX();
        cont?.appendChild(leftSideEnemy);
        cont?.appendChild(rightSideEnemy);
        const count = enemyCount + 2;
        console.log('count of enemy inc', count);
        console.log('enemy count pop enemy', enemyCount);
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
