const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_USERNAME = 'SET_USERNAME'

//Пока оставлю profiles, но возмодно он не нуден будет, и всё буду записывать сразу в profiles(кроме myProfile)
let initialState = {
    pageSize: 5,
    userName: 'Ivan Ruslanovich',
    myProfile: {
        profileId: '',
        firstName: 'Ivan',
        lastName: 'Ruslanovich',
        description: 'Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії. Я тренер з 10-річним стажем то допоможу вам побудувати тіло своєї мрії.',
        photoAvatarPath: null,
        instagramUrl: 'https://www.instagram.com/',
        facebookUrl: 'https://uk-ua.facebook.com/',
        telegramUsername: '@the_korobov',
        isCoach: false,
        username: '@the_korovob1',
        email: 'ivan.korobov@nure.ua',
        photos: {}
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
            firstName: 'Тимур',
            lastName: 'Травоманович',
            description: '',
            photoAvatarPath: null,
            instagramUrl: '',
            facebookUrl: '',
            telegramUsername: '',
            isCoach: false,
            username: '@techis3501',
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
        case SET_FIRST_NAME:
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    firstName: action.firstName
                }
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

//export const setUsersAC = (userId) => ({type: SET_USERS, userId})
export const setUserName = (userName) => ({type: SET_USERNAME, userName})
export const setFirstName = (firstName) => ({type: SET_FIRST_NAME, firstName})

export const getUserNameThunkCreator = () => {
    return (dispatch) => {

    }
}
export default userAccountReducer;