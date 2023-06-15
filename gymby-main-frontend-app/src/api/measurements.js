import {$authHost, $authHostWithoutHeaders} from './main'

export const measurementsAPI = {
    async getMeasurements() {
        const response = await $authHost.get(`api/measurement`)
        console.log(response)
        return response;
    },
    async addMeasurement(date, type, value, unit) {
        const response = await $authHost.post(`api/measurement/create`, {date, type, value, unit})
        return response;
    },
    async editMeasurement(id, date, type, value, unit) {
        const response = await $authHost.post(`api/measurement/edit`, {id, date, type, value, unit})
        return response;
    },
    async deleteMeasurement(id) {
        const response = await $authHost.post(`api/measurement/delete`, {id})
        return response;
    },
    async addMeasurementPhoto(photo, date) {
        let formData = new FormData();
        formData.append('photo', photo);
        formData.append('measurementDate', date);
        console.log(formData.get(date))
        const response = await $authHostWithoutHeaders.post(`api/photo/measurement`, formData)
        return response;
    },
    async deleteMeasurementPhoto(photoId) {
        let formData = new FormData();
        formData.append('photoId', photoId);

        const response = await $authHostWithoutHeaders.post(`api/photo/measurement/delete`, formData)
        return response;
    },
}

