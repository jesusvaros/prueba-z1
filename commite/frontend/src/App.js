import React, { Component } from "react";
import Loginform from "./page/loginform";

import "./sass/App.scss";

import MainPage from "./page/MainPage";

class App extends Component {
  state = {
    togle: true
  };
  onBind = () => {
    this.setState(prevState => ({
      togle: !prevState.togle
    }));
  };
  render() {
    return (
      <div className="container">
        <div className="notification">
          <div className="hermandapp">HermandAPP </div>
        </div>

        {this.state.togle ? <MainPage /> : <Loginform />}

        <div className="notification">
          <a onClick={() => this.onBind()}> Log in </a>
        </div>
      </div>
    );
  }
}

export default App;
