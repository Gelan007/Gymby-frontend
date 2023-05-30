import {profileAPI} from "../../api/profile";

const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_USERNAME = 'SET_USERNAME'
const SET_MY_PROFILE = 'SET_MY_PROFILE'

//Пока оставлю profiles, но возмодно он не нуден будет, и всё буду записывать сразу в profiles(кроме myProfile)
let initialState = {
    pageSize: 5,
    userName: 'Ivan Ruslanovich',
    myProfile: {
        profileId: '',
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
        case SET_MY_PROFILE:
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    username: action.username,
                    email: action.email,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    description: action.description,
                    photoAvatarPath: action.photoAvatarPath,
                    instagramUrl: action.instagramUrl,
                    facebookUrl: action.facebookUrl,
                    telegramUsername: action.telegramUsername,
                    profileId: action.profileId
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
export const setMyProfile = (username, email, firstName,
                             lastName, description, photoAvatarPath,
                             instagramUrl, facebookUrl, telegramUserName, profileId) => ({type: SET_MY_PROFILE,
    username, email, firstName,
    lastName, description, photoAvatarPath,
    instagramUrl, facebookUrl, telegramUserName, profileId})

export const updateProfile = (username, email, firstName,
                              lastName, description, photoAvatarPath,
                              instagramUrl, facebookUrl, telegramUserName, profileId) => {
    return (dispatch) => {
        profileAPI.updateProfile(username, email, firstName,
            lastName, description, photoAvatarPath,
            instagramUrl, facebookUrl, telegramUserName, profileId)
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setMyProfile(
                        response.data.username, response.data.email, response.data.firstName,
                        response.data.lastName, response.data.description, response.data.photoAvatarPath,
                        response.data.instagramUrl, response.data.facebookUrl, response.data.telegramUserName,
                        response.data.profileId
                    ))
                }
            })
    }
}
export const getMyProfile = () => {
    return (dispatch) => {
        profileAPI.getMyProfile()
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setMyProfile(
                        response.data.username, response.data.email, response.data.firstName,
                        response.data.lastName, response.data.description, response.data.photoAvatarPath,
                        response.data.instagramUrl, response.data.facebookUrl, response.data.telegramUserName,
                        response.data.profileId
                    ))
                }
            })
    }
}
export const getUserNameThunkCreator = () => {
    return (dispatch) => {

    }
}
export default userAccountReducer;