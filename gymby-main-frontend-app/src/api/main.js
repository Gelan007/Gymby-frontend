import axios from "axios";

//НАСТРОИТЬ ВСЕ ИНСТАНСЫ
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_MAIN_API_URL,
    headers: {},
    withCredentials: true
})

export {
    $authHost
}