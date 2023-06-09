import {combineReducers, createStore} from "redux";
import userAccountReducer from "./reducers/user-account-reducer";
import authReducer from "./reducers/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";
import languageSlice from './slices/language-slice'
import profileSlice from './slices/profile-slice'
import measurementSlice from './slices/measurements-slice'
import programSlice from './slices/program-slice'
import diarySlice from './slices/diary-slice'
import statisticsSlice from './slices/statistics-slice'

export const store = configureStore({
    reducer: {
        userAccountPage: userAccountReducer,
        auth: authReducer,
        language: languageSlice,
        profile: profileSlice,
        measurements: measurementSlice,
        program: programSlice,
        diary: diarySlice,
        statistics: statisticsSlice
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
