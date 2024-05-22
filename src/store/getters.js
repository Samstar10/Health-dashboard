export default {
	getTemperature(state) {
        return state.temperature
    },
    getAccessToken(state) {
        return  {
            headers: {
                'Authorization': 'Bearer ' + state.accessToken,
                'Content-Type': 'application/json'
            }
        }
    },
    getUser(state) {
        return state.user
    },

    getUserProfile(state) {
        return state.userProfile
    }
}