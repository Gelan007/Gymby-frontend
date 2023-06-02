import {$authHost, $authHostWithoutHeaders} from './main'

export const programsAPI = {
    async getProgramById(id) {
        const response = await $authHost.get(`api/program/1b6e9016-5e53-4662-b6c6-2ab7a42dfc65`)
        return response;
    },
    /*async deleteMeasurement(id) {
        const response = await $authHost.post(`api/measurement/delete`, {id})
        return response;
    },*/
}
