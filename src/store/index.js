import { createStore } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const store = createStore({
  state () {
    return {
      accessToken: null,
			temperature: null, 
			user: null   
    }
  },
  mutations: mutations,
  getters: getters,
  actions: actions
})

export default store