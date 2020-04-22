import axios from 'axios'

const getDefaultState = () => {
    return {
      token: '',
      user: {}
    }
  }

const state = getDefaultState()

const getters = {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
}

/* const actions = {
    async signInUser({ commit }) {
        await axios.post(`http://localhost:4000/api/users/sign_in`)
            .then((response) => {
                commit("updateCurrentUser", response.data.data)
            }, (error) => {
                console.log(error);
            })
    }
} */
const actions = {
    login: ({ commit }, { token, user }) => {
      commit('SET_TOKEN', token)
      commit('SET_USER', user)
      // set auth header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.defaults.withCredentials = true
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    }
  }

// const mutations = {
//     updateCurrentUser: (state, currentUser) => (state.forename = currentUser.forename)
// }

const mutations = {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}