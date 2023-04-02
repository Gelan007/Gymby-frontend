import {combineReducers, createStore} from "redux";
import userAccountReducer from "./reducers/user-account-reducer";
import authReducer from "./reducers/auth-reducer";


let reducers = combineReducers({
    userAccountPage: userAccountReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;