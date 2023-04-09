const SET_USERS = 'SET_USERS'
const SET_USERNAME = 'SET_USERNAME'

let initialState = {
    users: [],
    pageSize: 5,
    userId: 0,
    userName: 'Ivan Ruslanovich'
}

const userAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state
            }
        case SET_USERNAME:
            return {
                ...state,
                userName: action.userName
            }
        default:
            return state;
    }
}

export const setUsersAC = (userId) => ({type: SET_USERS, userId})
export const setUserName = (userName) => ({type: SET_USERNAME, userName})

export const getUserNameThunkCreator = () => {
    return (dispatch) => {

    }
}
export default userAccountReducer;