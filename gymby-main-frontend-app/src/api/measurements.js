import {$authHost} from './main'

/*export const profileAPI = {
    async getMeasurements() {
        const response = await $authHost.get('api/Measurements', {
            method: "GET"
        })
        return response.data;
    }
}*/

export const profileAPI = {
    async getMeasurements() {
        const response = await fetch('https://60b6-212-86-119-131.ngrok-free.app/api/Measurements', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Sec-Fetch-Mode': 'no-cors'
            },
            withCredentials: true,
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
