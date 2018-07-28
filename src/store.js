import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formSignUp: {
      requiredFields: {
        login: '',
        email: '',
        pass: ''
      },
      firstName: '',
      lastName: '',
      country: null,
      city: null,
      date: '',
      zip: ''
    }
  },

  mutations: {
    updateFieldLogin (state, loginForm) {
      state.formSignUp.requiredFields.login = loginForm
    },
    updateFieldEmail (state, emailForm) {
      state.formSignUp.requiredFields.email = emailForm
    },
    updateFieldPass (state, passForm) {
      state.formSignUp.requiredFields.pass = passForm
    },
    updateFieldFistName (state, firstNameForm) {
      state.formSignUp.firstName = firstNameForm
    },
    updateFieldLastName (state, lastNameForm) {
      state.formSignUp.lastName = lastNameForm
    },
    updateFieldCountry (state, countryForm) {
      state.formSignUp.country = countryForm
    },
    updateFieldCity (state, cityForm) {
      state.formSignUp.city = cityForm
    },
    updateFieldDate (state, dateForm) {
      state.formSignUp.date = dateForm
    },
    updateFieldZip (state, zipForm) {
      state.formSignUp.zip = zipForm
    },
  },

  actions: {}
})
