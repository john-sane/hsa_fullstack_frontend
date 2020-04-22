<template>
  <div class="sign-in-container">
      <form>
        <h1>Login</h1>
        <label for="email">E-Mail
          <input type="text" placeholder="E-Mail" v-model="email" />
        </label>
        <label for="password">Passwort
            <input type="text" placeholder="Dein Passwort" v-model="password"/>
        </label>        
        <input type="button" @click="login" value="Login" />
        <p v-if="msg">{{ msg }}</p>
        <p>
          <router-link to="/register">Oder Registrieren</router-link>
        </p>
      </form>
  </div>
</template>
<script>
import AuthService from '../services/AuthService.js';
export default {
  data() {
    return {
      email: '',
      password: '',
      msg: ''
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password
        };
        const response = await AuthService.login(credentials)
        console.log(response)
        this.msg = response.msg
        const token = response.user.forename
        const user = response.user
        this.$store.dispatch('login', { token, user })
        this.$router.push('/')
      } catch (error) {
        this.msg = error.response.data.msg
      }
    }
  }
};
</script>

<style scoped>
label, input{
    display: block;
    text-align: center;
}
label{
    margin-bottom: 1rem;
    margin-top: 1rem;
}

input{
    line-height: 1.5rem;
    font-size: 1rem;
    width: 270px;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 10px;
}

form{
    text-align: center;
    align-items: center;
}

.sign-in-container{
    font-size: 1.5rem;
    margin: auto;
    text-align: right;
    max-width: 300px;
    min-height: 500px;
    background: cornflowerblue;
    border-radius: 20px;
    color: white;
    padding-top: 5rem;
}
button{
    border-radius: 10px;
    line-height: 1.5rem;
    font-size: 1rem;
}
</style>