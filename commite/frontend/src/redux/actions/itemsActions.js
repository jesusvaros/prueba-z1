import axios from "axios";

import * as actionTypes from "./actionTypes";

export const createItem = (name, email, creacion, orden) => {
  return dispatch => {
    return axios
      .post("https://backend-cofrade.herokuapp.com/api/create/", {
        name,
        email,
        creacion,
        orden
      })
      .then(response => {
        dispatch(createItemSuccess(response.data));
        console.log(response);
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createItemSuccess = data => {
  return {
    type: actionTypes.ADD_ITEM,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      creacion: data.creacion,
      orden: data.orden
    }
  };
};

export const editItem = (name, email, creacion, orden, id) => {
  return dispatch => {
    return axios
      .put(`https://backend-cofrade.herokuapp.com/api/${id}/update/`, {
        name,
        email,
        creacion,
        orden
      })
      .then(response => {
        dispatch(editItemSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const editItemSuccess = data => {
  return {
    type: actionTypes.EDIT_ITEM,
    payload: data
  };
};

export const deleteItem = id => dispatch =>
  axios
    .delete(`https://backend-cofrade.herokuapp.com/api/${id}/delete/`)
    .then(() => dispatch(deleteItemSuccess(id)))
    .catch(console.warn);

export const deleteItemSuccess = id => ({
  type: actionTypes.DELETE_ITEM,
  id
});

export const fetchItems = () => {
  return dispatch => {
    return axios
      .get("https://backend-cofrade.herokuapp.com/api/")
      .then(response => {
        dispatch(fetchItemsSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const fetchItemsSuccess = items => {
  return {
    type: actionTypes.FETCH_ITEMS_SUCCESS,
    items
  };
};
