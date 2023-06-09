import {$authHost, $authHostWithoutHeaders} from './main'

export const statisticsAPI = {
    async getAllNumberStatistics() {
        const response = await $authHost.get(`api/statistics/numeric`)
        return response;
    },
}

