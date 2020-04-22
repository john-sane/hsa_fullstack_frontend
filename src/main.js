import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'


Vue.config.productionTip = false

// set auth header
axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`
axios.defaults.withCredentials = true

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
