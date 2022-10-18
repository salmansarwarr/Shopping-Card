import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './style.scss';
import { Provider } from 'react-redux';
import store from './Redux/store';

const root = createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)