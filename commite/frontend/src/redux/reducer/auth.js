import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";


const authState = {
  token: null,
  error: null,
  loading: false,
};

//and the begining is loading 
const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};
//if succes token is not null anymore
const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
};
//fail means we have only an error
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};
//logout will delete the token
const authLogout = (state) => {
  return updateObject(state, {
    token: null,
    loading: false
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
