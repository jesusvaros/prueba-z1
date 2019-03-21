import * as actionTypes from "../actions/actionTypes";

const deleteItem = (state, action) => {
  const newState = state.filter(item => item.id !== action.id);

  return newState;
};

const editItem = (state, action) => {
  const index = state.findIndex(item => item.id === action.payload.id);
  state[index] = action.payload;
  //const newState=state.map(item=>item.orden).sort();
  const newState = state.sort(function(a, b) {
    if (a.orden > b.orden) {
      return 1;
    }
    if (a.orden < b.orden) {
      return -1;
    }
    return 0;
  });
  
  return newState;
};

function itemsReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [...state, action.payload];
    case actionTypes.FETCH_ITEMS_SUCCESS:
      return action.items;
    case actionTypes.DELETE_ITEM:
      return deleteItem(state, action);
    case actionTypes.EDIT_ITEM:
      return editItem(state, action);
    default:
      return state;
  }
}

export default itemsReducer;
