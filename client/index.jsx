import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
const root = document.getElementById('root');
import { Provider } from 'react-redux';
import store from './utils/store'

render(
    <Provider store={store}>
            <App/>
    </Provider>
,root);