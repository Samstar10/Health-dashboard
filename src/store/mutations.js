import { baseURL } from "@/axiosClient"
import axios from "axios";

export default {
    setAccessToken(state, payload) {

        state.accessToken = payload
    },
    async setTemperature(state) {
        console.log(this.getters["getAccessToken"]);

        await axios.get(baseURL+'/bio/temperature?page=0&size=100',this.getters["getAccessToken"])
        .then(response =>{
            state.temperature = response.data
        })
        .catch(error => {
            console.log(error);
        })
    },
    async setUser(state) {


        await axios.get(baseURL+'/auth/info',this.getters["getAccessToken"])
        .then(response =>{
            state.user = response.data
        }).catch(error =>{
            console.log(error);
        })
    }
}