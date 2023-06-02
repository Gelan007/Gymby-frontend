import {$authHost, $authHostWithoutHeaders} from './main'

export const measurementsAPI = {
    async getMeasurements() {
        const response = await $authHost.get(`api/measurement`)
        return response;
    },
    async addMeasurement(date, type, value, unit) {
        const response = await $authHost.post(`api/measurement/create`, {date, type, value, unit})
        return response;
    },
    async deleteMeasurement(id) {
        const response = await $authHost.post(`api/measurement/delete`, {id})
        return response;
    },
}

