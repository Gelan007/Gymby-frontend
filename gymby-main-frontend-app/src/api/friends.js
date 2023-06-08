import {$authHost, $authHostWithoutHeaders} from './main'

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
    async rejectFriendship(username) {
        const response = await $authHost.post('api/friend/reject-request', {username})
        return response;
    },
    async deleteFriendship(username) {
        const response = await $authHost.post('api/friend/delete-request', {username})
        return response;
    },
    async inviteFriend(username) {
        const response = await $authHost.post('api/friend/invite', {username})
        return response;
    },
    async getQueryFriendsProfile(type, query) {
        let response = await $authHostWithoutHeaders.get(`api/profile/friends/search`)

        if (type && query) {
            response = await $authHostWithoutHeaders.get(`api/profile/friends/search?type=${type}&query=${query}`)
        } else if (type) {
            response = await $authHostWithoutHeaders.get(`api/profile/friends/search?type=${type}`)
        } else if (query) {
            response = await $authHostWithoutHeaders.get(`api/profile/friends/search?query=${query}`)
        }
        return response;
    },
    async accessProgramToUserByUsername(programId, username) {
        console.log(programId)
        console.log(username)
        const response = await $authHost.post('api/program/access', {programId, username})
        console.log(response)
        return response;
    },

}


