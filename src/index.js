import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import {BrowserRouter as Router, Route, HashRouter} from 'react-router-dom';

const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxPromise)
);

ReactDOM.render(
    
    <Provider store={store}>
        {/* HashRouter to avoid reloading page when enter url manually */}
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
