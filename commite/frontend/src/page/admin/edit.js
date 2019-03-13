import React, { Component } from "react";
import axios from "axios";
//import "../sass/edit.scss";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.item.name,
      email: this.props.item.email,
      creacion: this.props.item.creacion,
      orden: this.props.item.orden
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.state.name;
    let email = this.state.email;
    let creacion = this.state.creacion;
    let orden = this.state.orden;
    axios
      .put(`http://127.0.0.1:8000/api/${this.props.item.id}/update/`, {
        name: name,
        email: email,
        creacion: creacion,
        orden: orden
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="field is-grouped">
        <div className="cuadroEdit">
          <form onSubmit={this.handleSubmit}>
            <br />
            <div className="control has-icons-left">
              <input
                id="name"
                type="text"
                onChange={this.onChange}
                value={this.state.name}
                placeholder="Nombre "
                className="input"
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
                className="input"
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
                className="input"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-calendar-day" />
              </span>
            </div>
            <div className="buttonsubmit">
              <input
                className="button is-primary"
                type="submit"
                value="Guardar"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Edit;
