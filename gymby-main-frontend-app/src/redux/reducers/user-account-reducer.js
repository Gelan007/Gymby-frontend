const SET_USERS = 'SET_USERS'

let initialState = {
    users: [],
    pageSize: 5,
    userId: 0
}

const userAccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state
            }
        default:
            return state;
    }
}

export const setUsersAC = (userId) => ({type: SET_USERS, userId})

export default userAccountReducer;