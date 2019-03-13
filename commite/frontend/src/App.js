import React, { Component } from "react";
import Loginform from "./page/loginform";

import {connect} from "react-redux";
import "./sass/App.scss";

import MainPage from "./page/MainPage";

import { authCheckState } from "./redux/actions/auth";
import { bindActionCreators } from "redux";

class App extends Component {
  state = {
    togle: true
  };

  componentDidMount (){
    this.props.authCheckState();
  
  }
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

const mapStateToProps = state => ({
  isAuthenticated:state.token !== null,
});

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    authCheckState
  },
  dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(App);
