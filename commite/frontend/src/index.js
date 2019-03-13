import React from 'react';
import ReactDOM from 'react-dom';
import './sass/Index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bulma";

import authReducer from './redux/reducer/auth';

import {createStore, compose ,applyMiddleware} from 'redux';
import thunk  from 'redux-thunk';
import {Provider} from 'react-redux';

//this allow to use the redux devtool
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(authReducer,composeEnhances(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store ={store}>
      <App />
    </Provider>,
    document.getElementById('root'));
serviceWorker.unregister();
