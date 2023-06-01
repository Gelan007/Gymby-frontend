import {combineReducers, createStore} from "redux";
import userAccountReducer from "./reducers/user-account-reducer";
import authReducer from "./reducers/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";
import languageSlice from './slices/language-slice'
import profileSlice from './slices/profile-slice'
import measurementSlice from './slices/measurements-slice'

export const store = configureStore({
    reducer: {
        userAccountPage: userAccountReducer,
        auth: authReducer,
        language: languageSlice,
        profile: profileSlice,
        measurements: measurementSlice
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
