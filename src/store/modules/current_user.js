import axios from 'axios'

const state = { 
  user: {
    email: "",
  }
}

const getters = {
    getUser: state => {
      return state.user;
    },
    getEmail: state => {
      return state.user.email;
    }
}

const url = 'https://hsa-fullstack-backend.herokuapp.com:443/api/'

const actions = {
    async login( context, data) {
      axios.defaults.withCredentials = true
      return new Promise((resolve, reject) => {
        axios.post(url + 'users/sign_in', data)
          .then((response) => {
            resolve(response.data.data.user)
          })
          .catch((error) => {
            reject(error.response.data.errors.detail)
          })
      })
    },
    async validateEmail(context, mail){
      const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+.{0,1})+([^<>().,;:\s@"]{2,}|[\d.]+))$/
      return regex.test(mail)
    },
    async setCurrentUser({ commit }, user_data) {
      commit('SET_USER', user_data)
    },
    async signUp({ commit }, credentials) {
      return new Promise((resolve, reject) => {
        axios.post(url + 'users', credentials)
          .then((response) => {
            commit('SET_USER_EMAIL', response.data.data.email)
            resolve(true)
          })
          .catch((error) => {
            reject(error.response.data.errors.detail)
          })
      })
    },
    async logout({ commit }) {
      return new Promise((resolve, reject) => {
        console.log("sending logout post now")
        axios.post(url + 'users/sign_out')
          .then((response) => {
            console.log(response)
            commit('RESET', '')
            resolve(true)
          })
          .catch((error) => {
            reject(error.response.data.errors)
          })
      })
    },
}


const mutations = {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_USER_EMAIL: (state, email) => {
      state.user.email = email
    },
    RESET: state => {
      state.user = { email: "" }
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}