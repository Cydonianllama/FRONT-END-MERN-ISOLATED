import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
const root = document.getElementById('root');
import { Provider } from 'react-redux';
render(
    // <Provider>
        <App />
    // {/* </Provider> */}
,root);