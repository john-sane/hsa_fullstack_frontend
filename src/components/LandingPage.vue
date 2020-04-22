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
  </div>
</template>

<script>
export default {
  name: "LandingPage"
};
</script>

<style scoped>

</style>