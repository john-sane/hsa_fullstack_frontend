import Vue from "vue"
import Router from "vue-router"

import LandingPage from "./components/LandingPage.vue"
import SignIn from "./components/SignIn.vue"
import Register from "./components/Register.vue"
import UserList from "./components/UserList"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
        path: "/users",
        name: "users",
        component: UserList
      },
  ]
});