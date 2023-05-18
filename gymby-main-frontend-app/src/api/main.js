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
    baseURL: 'https://60b6-212-86-119-131.ngrok-free.app/',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true
})

export {
    $authHost
}