import React, { Component } from 'react';
import{Route} from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";

import './sass/App.scss';

import MainPage from './page/MainPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path ='/' component={MainPage}/>
      </Router>
    );
  }
}

export default App;
