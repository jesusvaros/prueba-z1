import React, { Component } from "react";
import Loginform from "./page/loginform";
import AdminPage from "./page/admin/AdminPage";

import { connect } from "react-redux";
import "./sass/App.scss";

import MainPage from "./page/MainPage";
import { authCheckState, logout } from "./redux/actions/auth";
import { bindActionCreators } from "redux";

class App extends Component {
  state = {
    togle: true
  };

  componentDidMount() {
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
          <div className="logo">HermandAPP </div>
        </div>
      <div className="container-menu">
        {this.state.togle ? (
          <MainPage />
        ) : (
          <div>
            {this.props.isAuthenticated ? <AdminPage /> : <Loginform />}
          </div>
        )}
      </div>

        <div className="container-menu-down notification">
          {this.props.isAuthenticated ? (
            <div>
              <a onClick={this.onBind}>
                {this.state.togle ? <span>Admin</span> : <span>Back</span>}
              </a>
              <a onClick={this.props.logout}>Logout</a>
            </div>
          ) : (
            <a onClick={this.onBind}>
              {this.state.togle ? <span>Login</span> : <span>Back</span>}
            </a>
          )}
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  isAuthenticated: store.authReducer.token !== null
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      authCheckState
    },
    dispatch
  );

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(App);
