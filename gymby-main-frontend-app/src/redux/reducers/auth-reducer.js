const SET_IS_AUTH = 'SET_IS_AUTH'


let initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export const setIsAuth = (isAuth) => ({type: SET_IS_AUTH, isAuth})


export default authReducer;