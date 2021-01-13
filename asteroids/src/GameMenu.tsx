/* eslint-disable react/react-in-jsx-scope */
///import * as React from 'react';
import { useEffect } from 'react';
import './App.css';
///import Timer from './Timer';

type AppProps = {
    onClick: () => void;
    show: boolean;
};

function GameMenu(props: AppProps) {
    useEffect(() => {
        const menu = document.getElementById('game-menu');
        if (!props.show) {
            if (menu) {
                menu.style.display = 'none';
            }
        }
    }, [props.show]);
    return (
        <div id="game-menu-cont">
            <div id="game-menu">
                <div>
                    <h1>Asteroids</h1>
                </div>
                <div>
                    <h3>Created By: Patrick McDermott</h3>
                </div>
                <div>
                    <p>
                        A web based game built from scratch using React and Typescript, with testing and hosted on AWS.
                    </p>
                </div>
                <div>
                    <button type="submit" onClick={props.onClick}>
                        Start Game
                    </button>
                </div>
            </div>
            <div></div>
        </div>
    );
}
export default GameMenu;
