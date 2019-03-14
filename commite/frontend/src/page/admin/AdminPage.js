import { fetchItems, deleteItem } from "../../redux/actions/itemsActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//import "../sass/AdminPage.scss";
import Edit from "../admin/edit";
import Item from "../admin/item";



class AdminPage extends Component {
  state = {
    itemsdate: [],
    edit: false,
    show: false
  };
  fetchArticles = () => {
    fetch("http://127.0.0.1:8000/api/datesort/")
      .then(res => res.json())
      .then(json => this.setState({ itemsdate: json }));
  };
  componentDidMount = () => {
    this.props.fetchItems();
    this.fetchArticles();
  };

  editData = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  };
  changeList = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  fetchArticles = () => {
    fetch("http://127.0.0.1:8000/api/datesort/")
      .then(res => res.json())
      .then(json => this.setState({ itemsdate: json }));
  };
  render() {
    return (
      <div className="container">
        {this.props.isAuthenticated ? (
          <div>
            <div>
              <button className="button" onClick={this.changeList}>
                Sort by {this.state.show ? "Creacion" : "Date"}
              </button>
              {this.state.show ? (
                <div>
                  <div className="tag is-ligth">
                    Ordenado por fecha de salida
                  </div>
                </div>
              ) : (
                <span>
                  <button className="button" onClick={this.editData}>
                    <i className="far fa-edit" />
                  </button>
                  <button className="button" onClick={this.submitposition}>
                    submit position
                  </button>
                  <button className="button" onClick={this.fetchArticles}>
                    submit position
                  </button>
                </span>
              )}
            </div>
            {this.state.show ? (
              <div>
                {this.state.itemsdate.map((itemda, index) => (
                  <div key={itemda.id}>
                    {<Item item={itemda} index={index}/>}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="tag is-ligth">Ordenado por Creacion</div>
                {this.state.itemsdate.map((item, index) => (
                  <div key={item.id}>
                    <div>
                      {this.state.edit ? (
                        <div className="buttons">
                          <div className="number">{index + 1}</div>
                          {<Edit />}
                          <div className="botones">
                            <button
                              className="button is-danger"
                              onClick={() => this.deleteData(item)}
                            >
                              Delete
                            </button>
                            <button
                              className="button"
                              onClick={() => this.upItem(item, index)}
                            >
                              <i className="fas fa-arrow-up" />
                            </button>
                            <button
                              className="button"
                              onClick={() => this.downItem(item, index)}
                            >
                              
                              <i className="fas fa-arrow-down" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <Item item={item} index={index} />
                       
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>Only for admin</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
    isAuthenticated: state.token !== null,
    items:state.itemsReducer
  });

  const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchItems,
      deleteItem
    },
    dispatch
  );

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AdminPage);


