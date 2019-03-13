import React, { Component } from "react";

import axios from "axios";

import "../sass/MainPage.scss";

class MainPage extends Component {
  // the parameters are saved here before send to server
  state = {
    name: "",
    email: "",
    creacion: "",
    items: []
  };
  //mount the component with the redux fetch
  componentDidMount = () => {
    //this.props.fetchCofrade();
  };
  //change the state every event
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  //Submit the state to the server
  handleSubmit = event => {
    event.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let creacion = this.state.creacion;

    axios
      .post("http://127.0.0.1:8000/api/create/", {
        name: name,
        email: email,
        creacion: creacion,
        orden: this.state.items.length
      })
      .then(response => {
        this.setState(prevState => ({
          items: [...prevState.items, response.data]
        }));
      })
      //let blank the form
      .then(
        this.setState({
          name: "",
          email: "",
          creacion: ""
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
          <div className="field is-grouped">
            <form onSubmit={this.handleSubmit}>
              <br />
              <div className="control has-icons-left">
                <input
                  id="name"
                  type="text"
                  onChange={this.onChange}
                  value={this.state.name}
                  placeholder="Nombre "
                  className="input  is-rounded"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-torii-gate" />
                </span>
              </div>
              <div className="control has-icons-left">
                <input
                  id="email"
                  type="email"
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="Email"
                  className="input is-rounded"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
              <div className="control has-icons-left">
                <input
                  id="creacion"
                  type="date"
                  onChange={this.onChange}
                  value={this.state.creacion}
                  className="input is-rounded"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-calendar-day" />
                </span>
              </div>

              <div className="buttonsubmit ">
                <input
                  className="button "
                  type="submit"
                  value="enviar"
                />
              </div>
            </form>
            <div className="notification">
            Contamos con:
            <br />
            <strong>123</strong> hermandades registradas
          </div>
          </div>

        </div>
    );
  }
}

export default MainPage;
