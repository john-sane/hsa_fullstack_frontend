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
    <input type="button" @click="logOutUser" value="Log Out" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "LandingPage",
  methods: {
      ...mapActions(['clear', 'logout']),
      async logOutUser() {
        await this.logout()
        .then((res) => {
          this.clear()
          console.log(res)
          this.$notify({
            title: "Du hast dich erfolgreich abgemeldet!",
            type: 'success'
          })
        })
        .catch((error) => {
            console.log("Log Out incomplete" + error)
        })
      }
  }
}
</script>

<style scoped>

</style>