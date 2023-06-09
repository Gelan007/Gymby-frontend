import {$authHost, $authHostWithoutHeaders} from './main'

export const statisticsAPI = {
    async getAllNumberStatistics() {
        const response = await $authHost.get(`api/statistics/numeric`)
        return response;
    },
    async getDoneExercisesByDate(startDate, endDate) {
        const response = await $authHost.post(`api/statistics/graph/exercises-done`, {startDate, endDate})
        return response;
    },
    async getDoneApproachesByDate(startDate, endDate) {
        const response = await $authHost.post(`api/statistics/graph/approaches-done`, {startDate, endDate})
        return response;
    },
}

