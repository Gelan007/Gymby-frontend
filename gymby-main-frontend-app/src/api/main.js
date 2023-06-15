import axios from "axios";

const $authHost = axios.create({
    baseURL: 'https://gymby-api.azurewebsites.net/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
const $authHostWithoutHeaders = axios.create({
    baseURL: 'https://gymby-api.azurewebsites.net/'
})

export {
    $authHost,
    $authHostWithoutHeaders
}