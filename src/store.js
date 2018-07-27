import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: '',

    countries: [
      {
        id: 1,
        name: 'China'
      },
      {
        id: 2,
        name: 'England'
      },
      {
        id: 3,
        name: 'Japan'
      }
    ],

    cities: [
      {
        id: 1,
        name: 'Pekin'
      },
      {
        id: 2,
        name: 'London'
      },
      {
        id: 3,
        name: 'Tokyo'
      }
    ]
  },
  mutations: {
    updateField (state, loginForm) {
      state.login = loginForm
    }
  },
  actions: {

  }
})
