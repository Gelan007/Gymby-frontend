import {$authHost} from './main'

/*export const profileAPI = {
    async getMeasurements(token) {
        const response = await $authHost.get('api/Measurements', {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': `${token}`
            },
        })
        return response.data;
    }
}*/

export const profileAPI = {
    async getMeasurements(fetch) {
        const response = await fetch('https://gymby-api.azurewebsites.net/api/Measurements', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            withCredentials: true
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
        return response.data;
    }
}
