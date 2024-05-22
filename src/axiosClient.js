import axios from 'axios'
import store from './store'


export const baseURL = import.meta.env.VITE_APP_HOST

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_HOST
})

// axiosClient.interceptors.request.use((config) => {
//     const token = store.getters['getAccessToken']
//     console.log(token);
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

export default axiosClient