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
        const response = await axios.get(`http://localhost:4000/api/users`)
        commit("setUsers", response.data.data)
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