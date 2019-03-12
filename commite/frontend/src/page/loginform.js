import React, { Component } from "react";

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

//   onSubmit = e => {
//     e.preventDefault();
//     this.props.authLogin(this.state.userName, this.state.password);
//     if (this.props.error == null) {
//       this.props.history.push("/Listado");
//     }
//   };

  render() {
    // let errorMessage = null;
    // if (this.props.error) {
    //   errorMessage = <p>{this.props.error.message}</p>;
    // }

    return (
      <div className="login-page">
          
            {/* {errorMessage} */}
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
                    <input
                      className="button"
                      type="submit"
                      value="enviar"
                    />
                  </div>
                </form>
              </div>
      </div>
    );
  }
}

export default Loginform;
