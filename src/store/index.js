import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import auth_user from './modules/auth_user'
import users from './modules/users'
import current_user from './modules/current_user'

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules:{
        users,
        current_user
    }
})