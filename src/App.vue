<template>
  <div id="app">
    <notifications width="100%" />
    <router-view></router-view>
  </div>
</template>

<script>
// import UserList from './components/UserList.vue'
//import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    //LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:  darkcyan;
  margin-top: 60px;
}
</style>
