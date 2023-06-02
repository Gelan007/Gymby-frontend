import {$authHost, $authHostWithoutHeaders} from './main'

export const programsAPI = {
    async getProgramById(id) {
        const response = await $authHost.get(`api/program/${id}`)
        return response;
    },
    async createProgram(programData) {
        const response = await $authHost.post(`api/program/create`, programData)
        return response;
    },
    /*async deleteMeasurement(id) {
        const response = await $authHost.post(`api/measurement/delete`, {id})
        return response;
    },*/
}
