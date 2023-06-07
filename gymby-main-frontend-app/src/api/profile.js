import {$authHost, $authHostWithoutHeaders} from './main'

export const profileAPI = {
    async getMyProfile() {
        const response = await $authHost.get('api/profile')
        return response;
    },
    async updateProfile(username, email, firstName,
                        lastName, description, photoAvatarPath,
                        instagramUrl, facebookUrl, telegramUsername, profileId) {
        let formData = new FormData();
        /*Object.keys(this.form).forEach((key) => {
            formData.append(key, this.form[key])
        })*/
        formData.append('ProfileId', profileId);
        formData.append('username', username);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('description', description);
        formData.append('photoAvatarPath', photoAvatarPath);
        formData.append('instagramUrl', instagramUrl);
        formData.append('facebookUrl', facebookUrl);
        formData.append('telegramUsername', telegramUsername);
        formData.append('Email', email);

        const response = await $authHostWithoutHeaders.post('api/profile/update', formData)
        console.log(response)
        return response;
    },
    async addProfilePhoto(photo) {
        let formData = new FormData();
        formData.append('photo', photo);

        const response = await $authHostWithoutHeaders.post('api/photo/profile', formData)
        return response;
    },
    async deleteProfilePhoto(photoId) {
        let formData = new FormData();
        formData.append('photoId', photoId);

        const response = await $authHostWithoutHeaders.post('api/photo/profile/delete', formData)
        return response;
    },
    async getProfileByUserName(userName) {
        const response = await $authHostWithoutHeaders.get(`api/profile/${userName}`)
        return response;
    },
    async getQueryProfile(type, query) {
        let response = await $authHostWithoutHeaders.get(`/api/profile/search`)

        if (type && query) {
            response = await $authHostWithoutHeaders.get(`/api/profile/search?type=${type}&query=${query}`)
        } else if (type) {
            response = await $authHostWithoutHeaders.get(`/api/profile/search?type=${type}`)
        } else if (query) {
            response = await $authHostWithoutHeaders.get(`/api/profile/search?query=${query}`)
        }
        return response;
    },

    /*async updateProfile(username, email, firstName,
                        lastName, description, photoAvatarPath,
                        instagramUrl, facebookUrl, telegramUsername, profileId) {

        const response = await $authHost.post('api/profile/update',
            {
                username, email, firstName,
                lastName, description, photoAvatarPath,
                instagramUrl, facebookUrl, telegramUsername, profileId
            })
        return response;
    } */

}

/*
export const getProfile = async () => {
    const response = await $authHost.get('api/Quest/Popular')
    return response.data;
}*/



