import {$authHost} from './main'

export const profileAPI = {
    async getProfile() {
        const response = await $authHost.get('api/Quest/Popular')
        return response.data;
    },
    async getProfile2() {
        const response = await $authHost.get('api/Quest/Popular')
        return response.data;
    }
}

/*
export const getProfile = async () => {
    const response = await $authHost.get('api/Quest/Popular')
    return response.data;
}*/
