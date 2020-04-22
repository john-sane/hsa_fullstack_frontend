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
        const response =  await axios.get(`http://localhost:4000/api/users`)
        commit("setUsers", response.data.data)
    }
}

const mutations = {
    setUsers: (state, allUsers) => (state.users = allUsers)
}

export default{
    state,
    getters,
    actions,
    mutations
}