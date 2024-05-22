export default {
	async setTemperature(context) {
		context.commit('setTemperature')
	},

	async setAccessToken(context, payload) {
		context.commit('setAccessToken', payload)
	},

	async setUser(context) {
		context.commit('setUser')
	}
}