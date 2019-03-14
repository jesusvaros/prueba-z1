import React, { Component } from "react";
import { authLogin } from "../redux/actions/auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//import "../sass/login.scss";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.authLogin(this.state.userName, this.state.password);
    if (this.props.error == null) {
    }
  };

  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
      console.log(errorMessage);
    }

    return (
      <div>
        {this.props.loading ? (
          <i className="fa fa-spinner fa-spin" />
        ) : (
          <div className="login-page">
            {errorMessage}
            <div className="field is-grouped ">
              <form onSubmit={this.onSubmit}>
                <label className="label">Username</label>
                <div className="control has-icons-left">
                  <input
                    id="userName"
                    type="text"
                    onChange={this.onChange}
                    value={this.state.userName}
                    className="input is-rounded"
                    placeholder="User"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-user" />
                  </span>
                </div>
                <label className="label">Password</label>
                <div className="control has-icons-left">
                  <input
                    id="password"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    className="input is-rounded"
                    placeholder="Password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </div>
                <div className="buttonsubmit">
                  <input className="button" type="submit" value="enviar" />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// take the state from the store
const mapStoreToProps = store => ({
  loading: store.authReducer.loading,
  error: store.authReducer.error,
  isAuthenticated: store.authReducer.token !== null
});
//send to authlogin the login data
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authLogin
    },
    dispatch
  );

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Loginform);
