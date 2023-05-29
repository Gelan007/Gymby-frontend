const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN'

let initialState = {
    isAuth: false,
    accessToken: ''
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.accessToken
            }
        default:
            return state;
    }
}

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})
export const setAccessToken = (accessToken) => ({type: SET_ACCESS_TOKEN, accessToken})

export default authReducer;