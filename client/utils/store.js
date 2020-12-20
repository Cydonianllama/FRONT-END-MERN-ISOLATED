import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import {
    userAddressMapReducer,
    userDeleteReducer,
    userDetailsReducer,
    userListReducer,
    userRegisterReducer,
    userSigninReducer,
    userUpdateProfileReducer,
    userUpdateReducer,
} from '../reducers/userReducers';

import {
    getHeadlineReducer,
    getAllNewsReducer,
} from '../reducers/newsReducer'

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    }
};

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userAddressMap: userAddressMapReducer,
    chargeHeadline : getHeadlineReducer,
    chargeAllNews : getAllNewsReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;