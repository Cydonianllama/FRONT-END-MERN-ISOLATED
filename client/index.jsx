import React from 'react';
import {render} from 'react-dom';
import App from './App';
const root = document.getElementById('root');
import { Provider } from 'react-redux';
import store from './utils/store'
import './styles.css'

render(
    <Provider store={store}>
            <App/>
    </Provider>
,root);