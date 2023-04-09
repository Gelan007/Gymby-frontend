import {combineReducers, createStore} from "redux";
import userAccountReducer from "./reducers/user-account-reducer";
import authReducer from "./reducers/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        userAccountPage: userAccountReducer,
        auth: authReducer
    },
    devTools: true
})

/*
let reducers = combineReducers({
    userAccountPage: userAccountReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;*/
