import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Notifications from 'vue-notification'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
