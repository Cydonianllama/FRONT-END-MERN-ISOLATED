import React from 'react';
import {render} from 'react-dom';

// State Managemment
import { Provider } from 'react-redux';
import store from './utils/store'

import App from './app';
import './styles.css'
const root = document.getElementById('root');

const Application  = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}

render(<Application/>,root)