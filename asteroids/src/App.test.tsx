import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import App from './App';

let container: Element;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    ///container = null;
});

it('renders at center of screen', () => {
    act(() => {
        render(<App />, container);
    });
    const ship = document.getElementById('ship');
    if (ship) {
        expect(ship.getBoundingClientRect).toBe(900);
    }
});
