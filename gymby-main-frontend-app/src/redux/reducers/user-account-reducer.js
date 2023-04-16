const SET_USERS = 'SET_USERS'
const SET_USERNAME = 'SET_USERNAME'

//Пока оставлю profile, но возмодно он не нуден будет, и всё буду записывать сразу в profiles(кроме myProfile)
let initialState = {
    users: [],
    pageSize: 5,
    userId: 0,
    userName: 'Ivan Ruslanovich',
    myProfile: {
        profileId: 0,
        firstName: 'firstName',
        lastName: 'lastName',
        description: '',
        photoAvatarPath: null,
        instagramUrl: '',
        facebookUrl: '',
        telegramUsername: '',
        isCoach: false,
        username: 'userName',
        email: '',
    },
    profile: {
        profileId: 0,
        firstName: 'firstName',
        lastName: 'lastName',
        description: '',
        photoAvatarPath: null,
        instagramUrl: '',
        facebookUrl: '',
        telegramUsername: '',
        isCoach: false,
        username: 'userName',
        email: '',
    },
    profiles: [
        {
            profileId: 0,
            firstName: '',
            lastName: '',
            description: '',
            photoAvatarPath: null,
            instagramUrl: '',
            facebookUrl: '',
            telegramUsername: '',
            isCoach: false,
            username: '',
            email: '',
        },
        {
            profileId: 0,
            firstName: 'Ivan',
            lastName: 'Korobov',
            description: 'Best trainer WOT in the world!',
            photoAvatarPath: null,
            instagramUrl: '',
            facebookUrl: '',
            telegramUsername: '',
            isCoach: false,
            username: '@IvanChiftein',
            email: 'ivan.korobov@gmail.com',
        }
    ]
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