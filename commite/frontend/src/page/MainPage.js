import React, { Component } from "react";

import { fetchItems, createItem } from "../redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Recaptcha from "react-recaptcha";
import "../sass/MainPage.scss";

class MainPage extends Component {
  // the parameters are saved here before send to server
  state = {
    name: "",
    email: "",
    creacion: "",
    items: [],
    isHuman: false
  };
  //mount the component with the redux fetch
  componentDidMount = () => {
    this.props.fetchItems();
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
    if (this.state.isHuman) {
      let name = this.state.name;
      let email = this.state.email;
      let creacion = this.state.creacion;
      let orden = this.props.itemslength;

      this.props.createItem(name, email, creacion, orden);
      this.setState({
        name: "",
        email: "",
        creacion: ""
      });
    } else {
      alert("not a humando");
    }
  };

  recaptchaLoaded = () => {
    console.log("recaptcha-loaded");
  };
  bindhuman = response => {
    if (response) {
      this.setState({
        isHuman: true
      });
    }
  };

  render() {
    return (
      <div className="box">
        <div className=" container-mainpage field is-grouped">
          <form onSubmit={this.handleSubmit}>
            <br />
            <div className="control has-icons-left">
              <input
                id="name"
                type="text"
                onChange={this.onChange}
                value={this.state.name}
                placeholder="Nombre "
                className="input is-rounded input-push"
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
                className="input is-rounded input-push"
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
                className="input is-rounded input-push"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-calendar-day" />
              </span>
            </div>

            <div className="button-submit ">
              <input className="button" type="submit" value="enviar" />
              <Recaptcha
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                render="explicit"
                onloadCallback={this.recaptchaLoaded}
                verifyCallback={this.bindhuman}
              />
            </div>
          </form>
          <div className="container-info notification">
            Contamos con:
            <br />
            <strong>{this.props.itemslength}</strong> hermandades registradas
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => ({
  itemslength: store.itemsReducer.length,
  error: store.authReducer.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchItems,
      createItem
    },
    dispatch
  );

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(MainPage);
