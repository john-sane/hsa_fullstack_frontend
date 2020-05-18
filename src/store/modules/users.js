import axios from 'axios'

const state = {
    users: []
}

const getters = {
    getUsers: (state) => {
        return state.users
    }
}

const actions = {
    async fetchUsers({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get(`https://hsa-fullstack-backend.herokuapp.com:443/api/users`)
            .then((response) => {
                commit("setUsers", response.data.data)
                resolve(true)
            })
            .catch((error) => {
              reject(error.response.data.errors)
            })
        })
    },
    async clear({ commit }) {
        commit('clearUsers', '')
      }
}

const mutations = {
    setUsers: (state, allUsers) => (state.users = allUsers),
    clearUsers: (state) => (state.users = [])
}

export default{
    state,
    getters,
    actions,
    mutations
}