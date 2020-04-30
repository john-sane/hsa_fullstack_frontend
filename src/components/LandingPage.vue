<template>
  <div>
    <h1>Hi, willkommen zur WebApp</h1>
    <p>
      <router-link to="/register">Jetzt Registrieren</router-link>
    </p>
    <p>
      <router-link to="/sign-in">Jetzt Einloggen</router-link>
    </p>
    <p>
      <router-link to="/users">Nutzerübersicht</router-link>
    </p>
    <input type="button" @click="logOut" value="Log Out" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "LandingPage",
  methods: {
      ...mapActions(['clear', 'logout']),
      async logOut() {
          try {
              this.clear()
              this.logout()
          } catch (error){
              console.log("Log Out incomplete")
          }
      }
  }
}
</script>

<style scoped>

</style>