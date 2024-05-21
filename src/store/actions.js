import store from './index'
import axiosClient from '@/axiosClient'

export default {
	async getTemperature() {
		const response = await axiosClient.get('/bio/temperature?page=0&size=100')
		store.commit('setTemperature', response.data)
	},

	async setAccessToken() {
		store.commit('setAccessToken', "eyJhbGciOiJIUzUxMiJ9.eyJhY2Nlc3NvciI6IjEwMzM1OCIsImFjY2Vzc2luZyI6IjEwMzM1NyIsInByb3ZpZGVyIjoiMTAzMzU2IiwiZnVuY3Rpb24iOiJCYXNpY0F1dGhlbnRpY2F0aW9uIiwiaXNzIjoiJDJhJDEwJDN5RGJBeUl6NERjcGFOQUlZL29nc09xZFE2a2xXelFSTHllczV3WXR2VjVRckhUbERCTDUyIiwiaWF0IjoxNzE2MjkzNTY2LCJleHAiOjE3MTYzMTE1NjZ9.R7bBeOU5JWe-2qplZGAxSX-cEjyViv3-Srkv_nXI2Skhaapn5BoUQz8KV0jGiWVUHzJoRNUX_CPqTBs52ofdgQ")
	},

	async getUser() {
		const response = await axiosClient.get('/auth/info')
		store.commit('setUser', response.data)
	}
}