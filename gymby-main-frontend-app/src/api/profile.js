import {$authHost} from './main'

export const profileAPI = {
    async getMyProfile() {
        const response = await $authHost.get('/api/profile')
        return response;
    },
    async updateProfile(username, email, firstName,
                        lastName, description, photoAvatarPath,
                        instagramUrl, facebookUrl, telegramUserName, profileId) {

        const response = await $authHost.post('api/profile/update',
            {
                username, email, firstName,
                lastName, description, photoAvatarPath,
                instagramUrl, facebookUrl, telegramUserName, profileId
            })
        return response;
    }

}

/*
export const getProfile = async () => {
    const response = await $authHost.get('api/Quest/Popular')
    return response.data;
}*/
