import {profileAPI} from "../../api/profile";
import {friendsAPI} from "../../api/friends";

const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_USERNAME = 'SET_USERNAME'
const SET_MY_PROFILE = 'SET_MY_PROFILE'
const SET_PROFILE = 'SET_PROFILE'
const SET_MY_PROFILE_PHOTO = 'SET_MY_PROFILE_PHOTO'
const SET_PROFILES_LIST = 'SET_PROFILES_LIST'


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
        photos: []
    },
    profile: {
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
        photos: [],
        isRequestCompleted: false
    },
    profiles: [{}]
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
                    profileId: action.profileId,
                    photos: [...action.photos.map(photo => ({photoPath: photo.photoPath, photoId: photo.id}))]
                }
            }
        case SET_MY_PROFILE_PHOTO:
            return {
                ...state,
                myProfile: {
                    ...state.myProfile,
                    photos: [...action.photos.map(photo => ({photoPath: photo.photoPath, photoId: photo.id}))]
                }
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    username: action.username,
                    email: action.email,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    description: action.description,
                    photoAvatarPath: action.photoAvatarPath,
                    instagramUrl: action.instagramUrl,
                    facebookUrl: action.facebookUrl,
                    telegramUsername: action.telegramUsername,
                    profileId: action.profileId,
                    photos: [...action.photos.map(photo => ({photoPath: photo.photoPath, photoId: photo.id}))],
                    isRequestCompleted: action.isRequestCompleted
                }
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    isRequestCompleted: action.isRequestCompleted
                }
            }
        case SET_PROFILES_LIST:
            return {
                ...state,
                profiles: [
                    ...action.profiles
                ]
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
                             instagramUrl, facebookUrl, telegramUsername, profileId, photos) => ({type: SET_MY_PROFILE,
    username, email, firstName,
    lastName, description, photoAvatarPath,
    instagramUrl, facebookUrl, telegramUsername, profileId, photos})
export const setProfile = (username, email, firstName,
                             lastName, description, photoAvatarPath,
                             instagramUrl, facebookUrl, telegramUsername, profileId, photos, isRequestCompleted) => ({type: SET_PROFILE,
    username, email, firstName,
    lastName, description, photoAvatarPath,
    instagramUrl, facebookUrl, telegramUsername, profileId, photos, isRequestCompleted})

export const setMyProfilePhoto = (photo) => ({type: SET_MY_PROFILE_PHOTO, photo})
export const setProfilesList = (profiles) => ({type: SET_PROFILES_LIST, profiles})

export const updateProfile = (username, email, firstName,
                              lastName, description, photoAvatarPath,
                              instagramUrl, facebookUrl, telegramUsername, profileId) => {
    return (dispatch) => {
        profileAPI.updateProfile(username, email, firstName,
            lastName, description, photoAvatarPath,
            instagramUrl, facebookUrl, telegramUsername, profileId)
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setMyProfile(
                        response.data.username, response.data.email, response.data.firstName,
                        response.data.lastName, response.data.description, response.data.photoAvatarPath,
                        response.data.instagramUrl, response.data.facebookUrl, response.data.telegramUsername,
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
                        response.data.instagramUrl, response.data.facebookUrl, response.data.telegramUsername,
                        response.data.profileId, response.data.photos
                    ))
                }
            })
    }
}
export const addProfilePhoto = (photo) => {
    return (dispatch) => {
        profileAPI.addProfilePhoto(photo)
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setMyProfilePhoto(
                        response.data
                    ))
                }
            })
    }
}
export const deleteProfilePhoto = (photoId) => {
    return (dispatch) => {
        profileAPI.deleteProfilePhoto(photoId)
            .then(response => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setMyProfilePhoto(
                        response.data
                    ))
                }
            })
    }
}
export const getProfileByUserName = (userName) => {
    return (dispatch) => {
        profileAPI.getProfileByUserName(userName)
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    const isRequestCompleted = true
                    dispatch(setProfile(
                        response.data.username, response.data.email, response.data.firstName,
                        response.data.lastName, response.data.description, response.data.photoAvatarPath,
                        response.data.instagramUrl, response.data.facebookUrl, response.data.telegramUsername,
                        response.data.profileId, response.data.photos, isRequestCompleted
                    ))

                }
            })
    }
}
export const getMyFriendsList = () => {
    return (dispatch) => {
        friendsAPI.getMyFriendsList()
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setProfilesList(
                        response.data
                    ))
                }
            })
    }
}
export const getMyPendingFriendsList = () => {
    return (dispatch) => {
        friendsAPI.getMyPendingFriendsList()
            .then((response) => {
                if(response.status >= 200 && response.status <= 204) {
                    dispatch(setProfilesList(
                        response.data
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