import React from 'react';
import ReactDOM from 'react-dom';
import './sass/Index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bulma";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
