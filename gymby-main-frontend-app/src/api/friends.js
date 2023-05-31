import {$authHost} from './main'

export const friendsAPI = {
    async getMyFriendsList() {
        const response = await $authHost.get('api/friend/friends')
        return response;
    },
}


