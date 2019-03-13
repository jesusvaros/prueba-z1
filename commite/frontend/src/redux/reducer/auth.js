import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";


const authState = {
  token: null,
  error1: null,
  loading1: false,
};

//and the begining is loading 
const authStart = (state, action) => {
  return updateObject(state, {
    error1: null,
    loading1: true
  });
};
//if succes token is not null anymore
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error1: null,
    loading1: false
  });
};
//fail means we have only an error
const authFail = (state, action) => {
  return updateObject(state, {
    error1: action.error1,
    loading1: false
  });
};
//logout will delete the token
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    loading1: false
  });
};

//the reducer join the actions with the store
const authReducer = (state = authState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
 
    default:
      return state;
  }
};

export default authReducer;
