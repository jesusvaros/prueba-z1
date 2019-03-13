import { combineReducers } from 'redux';
import authReducer from './reducer/auth';
import itemsReducer from './reducer/itemsReducer';


export default combineReducers({
    authReducer,
    itemsReducer
});


