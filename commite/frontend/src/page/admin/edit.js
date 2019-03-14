import React, { Component } from "react";
import { deleteItem, editItem } from "../../redux/actions/itemsActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


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
    let id = this.props.item.id;
    this.props.editItem(name, email, creacion, orden, id);
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
              <button
                className="button is-danger"
                onClick={() => this.props.deleteItem(this.props.item.id)}
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      editItem,
      deleteItem
    },
    dispatch
  );

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Edit);
