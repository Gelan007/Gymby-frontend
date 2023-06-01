import {$authHost, $authHostWithoutHeaders} from './main'

export const measurementsAPI = {
    async getMeasurements() {
        const response = await $authHost.get(`api/measurement`)
        return response;
    },
}

