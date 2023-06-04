import {$authHost} from './main'

export const friendsAPI = {
    async getMyFriendsList() {
        const response = await $authHost.get('api/friend/friends')
        return response;
    },
    async getMyPendingFriendsList() {
        const response = await $authHost.get('api/friend/pending-friends')
        return response;
    },
    async acceptFriendship(username) {
        const response = await $authHost.post('api/friend/accept-request', {username} )
        return response;
    },
}


