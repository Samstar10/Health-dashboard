import axios from 'axios'
import { useStore } from 'vuex'

const store = useStore()

const axiosClient = axios.create({
    baseURL: process.env.APP_HOST
})

axiosClient.interceptors.request.use((config) => {
    const token = store.state.accessToken
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default axiosClient