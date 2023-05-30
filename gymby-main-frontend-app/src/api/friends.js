import {$authHost} from './main'

export const friendsAPI = {
    async getMyFriendsList() {
        const response = await $authHost.get('api/profile/friends')
        return response;
    },
}


