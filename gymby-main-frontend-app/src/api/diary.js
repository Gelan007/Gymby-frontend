import {$authHost, $authHostWithoutHeaders} from './main'

export const diaryAPI = {
    async getDiaryDay(date, diaryId) {
        let response;
        if(date && diaryId) {
            response = await $authHost.post(`api/diary/day`, {date, diaryId})
        } else {
            response = await $authHost.post(`api/diary/day`, {date, diaryId: null})
        }
        return response;
    },
    async createExercise(diaryId, exercisePrototypeId, date, name) {
        const response = await $authHost.post('api/diary/exercise/create', {diaryId: "2b634173-4f78-492f-84a5-5268819f56ff", exercisePrototypeId, programDayId: null, date, name})
        return response;
    },
    async deleteExercise(exerciseId) {
        const response = await $authHost.post('api/diary/exercise/delete', {exerciseId})
        return response;
    },
    async deleteApproach(approachId) {
        const response = await $authHost.post('api/diary/approach/delete', {approachId})
        return response;
    },
    async createApproach(exerciseId, repeats, weight) {
        const response = await $authHost.post('api/diary/approach/create', {exerciseId, repeats, weight})
        return response;
    },
    async updateApproach(exerciseId, approachId, repeats, weight, isDone) {
        const response = await $authHost.post(`api/diary/approach/update`, {approachId, exerciseId,repeats,weight,isDone})
        return response;
    },
    async getAllProgramsInDiary() {
        const response = await $authHost.get(`api/diary/all-programs`, )
        return response;
    },
    async importProgramDay(diaryId, programId, programDayId, date) {
        const response = await $authHost.post(`api/diary/import/program-day`, {diaryId, programId,programDayId,date})
        return response;
    },
}

