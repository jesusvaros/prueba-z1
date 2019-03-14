import { fetchItems, editItem } from "../../redux/actions/itemsActions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "../../sass/adminPage.scss";
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

  upItem = index => {
    if (index === 0) {
      return;
    }
    //this will rotate the item going up with the one in top
    const position = index - 1;
    console.log(position);
    const items = this.props.items.slice();
    console.log(items);
    const move = items[position];
    console.log(move);
    items[position] = items[index];

    items[index] = move;
    console.log(items);

    this.update(items);
  };

  downItem = index => {
    if (index === this.props.items.length - 1) {
      return;
    }
    //this will rotate the item going up with the one in top
    const position = index + 1;
    console.log(position);
    const items = this.props.items.slice();
    console.log(items);
    const move = items[position];
    console.log(move);
    items[position] = items[index];

    items[index] = move;
    console.log(items);

    this.update(items);
  };
  update = items => {
    items.forEach((item, index) => {
      this.props.editItem(item.name, item.email, item.creacion, index, item.id);
      console.log(item);
    });
    this.props.fetchItems();
  };

  render() {
    return (
      <div className="marginext">
        {this.props.isAuthenticated ? (
          <div className="marginext">
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
                </span>
              )}
            </div>
            {this.state.show ? (
              <div>
                {this.state.itemsdate.map((itemda, index) => (
                  <div key={itemda.id}>
                    {<Item item={itemda} index={index} />}
                  </div>
                ))}
              </div>
            ) : (
              <div className="list">
                <div className="tag is-ligth">Ordenado por Creacion</div>
                {this.props.items.map((item, index) => (
                  <div key={item.id}>
                    <div className="field is-grouped-multiline">
                      {this.state.edit ? (
                        <div className="buttons">
                          <div className="number">{index + 1}</div>
                          {<Edit item={item} />}
                          <div className="botones">
                            <button
                              className="button"
                              onClick={() => this.upItem(index)}
                            >
                              <i className="fas fa-arrow-up" />
                            </button>
                            <button
                              className="button"
                              onClick={() => this.downItem(index)}
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
  items: state.itemsReducer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchItems,
      editItem
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);
