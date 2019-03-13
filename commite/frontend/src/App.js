import React, { Component } from "react";
import Loginform from "./page/loginform";

import {connect} from "react-redux";
import "./sass/App.scss";

import MainPage from "./page/MainPage";

import { authCheckState,logout } from "./redux/actions/auth";
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
          {this.props.isAuthenticated?
            <a onClick={this.props.logout}>Log out</a>
          :
            <a onClick={() => this.onBind()}> Log in </a>
          }
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
    logout,
    authCheckState
  },
  dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(App);
