import {$authHost, $authHostWithoutHeaders} from './main'

export const programsAPI = {
    async getProgramById(id) {
        const response = await $authHost.get(`api/program/${id}`)
        return response;
    },
    async getFreePrograms() {
        const response = await $authHost.get(`api/programs/free`)
        return response;
    },
    async getSharedPrograms() {
        const response = await $authHost.get(`api/programs/shared`)
        return response;
    },
    async getPersonalPrograms() {
        const response = await $authHost.get(`api/programs/personal`)
        return response;
    },
    async createProgram(programData) {
        const response = await $authHost.post(`api/program/create`, programData)
        return response;
    },
    async createProgramDay(programId, name) {
        const response = await $authHost.post(`api/program/day/create`, {programId, name})
        return response;
    },
    async updateProgramDay(programDayId, programId, name) {
        const response = await $authHost.post(`api/program/day/update`, {programDayId, programId, name})
        return response;
    },
    async deleteProgramDay(programDayId, programId) {
        const response = await $authHost.post(`api/program/day/delete`, {programDayId, programId})
        return response;
    },
    /*async deleteMeasurement(id) {
        const response = await $authHost.post(`api/measurement/delete`, {id})
        return response;
    },*/
}
