import * as actionTypes from "../actions/actionTypes";

const deleteItem =(state, action) =>{
  const newState = state.filter(item => item.id !== action.id);

  return newState ;
};

const editItem =(state, action)=>{
  console.warn('heello')

  const index = state.findIndex(item => item.id === action.payload.id);
  state[index]=action.payload;

  return state;
};


function itemsReducer(state=[ ] , action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return [...state, action.payload];
    case actionTypes.FETCH_ITEMS_SUCCESS:
      return action.items;
    case actionTypes.DELETE_ITEM:
      return deleteItem (state,action);
    case actionTypes.EDIT_ITEM:
      return editItem (state,action);
    default:
      return state;
  }
}

export default itemsReducer;