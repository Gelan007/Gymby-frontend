import axios from "axios";

//НАСТРОИТЬ ВСЕ ИНСТАНСЫ
/*
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_MAIN_API_URL,
    headers: {},
    withCredentials: true
})

export {
    $authHost
}*/

const $authHost = axios.create({
    baseURL: 'https://gymby-api.azurewebsites.net/',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

export {
    $authHost
}