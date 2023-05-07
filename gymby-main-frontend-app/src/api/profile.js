import {$authHost} from './main'
// Все запросы для профиля(именно профиля сервера, то есть в контексте бека а профиля не фронта.
// то есть если надо сделать запрос в другом месте а не в профиле, то можно спокойно делать запрос отсюда


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
