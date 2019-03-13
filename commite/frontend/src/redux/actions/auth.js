import * as actionTypes from "./actionTypes";
import axios from "axios";

//start the process of authetication
export const authStart = () => {
  return{
    type :actionTypes.AUTH_START
  }
}
//if it's success send a token
export const authSuccess = token =>{
  return{
    type:actionTypes.AUTH_SUCCESS,
    token:token
  }
}
//if not send an error
export const authFail = error =>{
  return {
    type :actionTypes.AUTH_FAIL,
    error: error
  }
}
//logout will delete the info from local store
export const logout = () =>{
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  
  return {
    type:actionTypes.AUTH_LOGOUT
  };
}
//when the expiration time is done it will automatically logout
export const checkAuthTimeout = expirationTime => {
    return dispatch =>{
      setTimeout (()=>{
          dispatch(logout());
      },expirationTime * 1000)
    }
}
//post the info in the server
export const authLogin = (username,password) => {
      return dispatch => {
            dispatch(authStart());
            axios.post("http://127.0.0.1:8000/rest-auth/login/",{
                username:username,
                password:password
            })
            //send the token and start the time 
            .then (res=>{
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() +3600 * 1000);
                localStorage.setItem("token",token);
                localStorage.setItem("expirationDate",expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            })
            //send the error 
            .catch(err => {
                dispatch(authFail(err))
            })
      }
}

//check if the time has passed or the token is deleted to logout if it's necessary
export const authCheckState = () => {
  return dispatch => {
        const token = localStorage.getItem ("token");
        if (token=== undefined){
              dispatch(logout());
        }else {
              const expirationDate = new Date (localStorage.getItem("expirationDate"));
              if (expirationDate <= new Date ()) {
                    dispatch (logout());
              }else{
                    dispatch (authSuccess(token));
                    dispatch (checkAuthTimeout((expirationDate.getTime()- new Date().getTime()) / 1000));
              }
        }
    }
}