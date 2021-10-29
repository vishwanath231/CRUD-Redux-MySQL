import { combineReducers } from 'redux';
import { userReducer, selectUserReducer } from './userReducer';

export const reducer = combineReducers({
    user: userReducer,
    list: selectUserReducer
})