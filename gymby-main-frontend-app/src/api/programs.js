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
    async deleteProgram(programId) {
        const response = await $authHost.post(`api/program/delete`, {programId})
        return response;
    },
    async updateProgram(programId, name, description, level, type) {
        const response = await $authHost.post(`api/program/update`, {programId, name, description, level, type})
        return response;
    },
    async createExercise(programId, exercisePrototypeId, programDayId, name) {
        const response = await $authHost.post(`api/program/exercise/create`, {programId, exercisePrototypeId, programDayId, name})
        return response;
    },
    async deleteExercise(programId, exerciseId) {
        const response = await $authHost.post(`api/program/exercise/delete`, {programId, exerciseId})
        return response;
    },
    async getAllExercisesPrototype() {
        const response = await $authHost.get(`api/diary/exercise-prototypes`)
        return response;
    },
    async createApproach(programId, exerciseId, repeats, weight, interval) {
        const response = await $authHost.post(`api/program/approach/create`, {programId, exerciseId, repeats, weight, interval})
        return response;
    },
    async deleteApproach(programId, exerciseId, approachId) {
        const response = await $authHost.post(`api/program/approach/delete`, {programId, exerciseId, approachId})
        return response;
    },
    async updateApproach(programId, exerciseId, approachId, repeats, weight, isDone, interval) {
        const response = await $authHost.post(`api/program/approach/update`, {programId, approachId, exerciseId,repeats,weight,isDone, interval})
        return response;
    },
    async getQueryProgram(query, level, type) {
        let response = await $authHostWithoutHeaders.get(`/api/program/search`)

        if (type && level && query) {
            response = await $authHostWithoutHeaders.get(`/api/program/search?level=${level}&type=${type}&query=${query}`)
        } else if (type) {
            response = await $authHostWithoutHeaders.get(`/api/program/search?type=${type}`)
        } else if (query) {
            response = await $authHostWithoutHeaders.get(`/api/program/search?query=${query}`)
        }
        return response;
    },
}
