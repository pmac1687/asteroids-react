import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import App from './App';

///down arrow
test('ship moves 90px down on down arrow press', () => {
    render(<App />);
    const ship = document.getElementById('ship');
    ///move 3 down clicks
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                code: 'ArrowDown',
                keyCode: 40,
            }),
        );
    });
    console.log(expect(ship?.style.top).toBe(`${90}px`));
});
////up arrow
test('ship moves 90px up on up arrow press', () => {
    render(<App />);
    const ship = document.getElementById('ship');
    ///move 3 up clicks
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowUp',
                code: 'ArrowUp',
                keyCode: 38,
            }),
        );
    });
    console.log(expect(ship?.style.top).toBe(`${-90}px`));
});
////right arrow
test('ship moves 90px right on right arrow press', () => {
    render(<App />);
    const ship = document.getElementById('ship');
    ///move 3 up clicks
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowRight',
                code: 'ArrowRight',
                keyCode: 39,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowRight',
                code: 'ArrowRight',
                keyCode: 39,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowRight',
                code: 'ArrowRight',
                keyCode: 39,
            }),
        );
    });
    console.log(expect(ship?.style.left).toBe(`${90}px`));
});
///left arrow
test('ship moves 90px left on left arrow press', () => {
    render(<App />);
    const ship = document.getElementById('ship');
    ///move 3 up clicks
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowLeft',
                code: 'ArrowLeft',
                keyCode: 37,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowLeft',
                code: 'ArrowLeft',
                keyCode: 37,
            }),
        );
    });
    act(() => {
        global.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'ArrowLeft',
                code: 'ArrowLeft',
                keyCode: 37,
            }),
        );
    });
    console.log(expect(ship?.style.left).toBe(`${-90}px`));
});
