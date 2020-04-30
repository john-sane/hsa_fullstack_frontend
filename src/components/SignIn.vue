<template>
  <div class="sign-in-container">
      <form @submit.prevent>
        <h1>Login</h1>
        <label for="email">E-Mail
          <input type="email" placeholder="E-Mail" v-model="email" required/>
        </label>
        <label for="password">Passwort
            <input type="password" placeholder="Dein Passwort" v-model="password" required/>
        </label>        
        <input type="button" @click="login_user" value="Login" />
        <p class="errors" v-for="error in errors" :key="error">{{ error }}</p>
        <p>
          <router-link to="/register">Oder Registrieren</router-link>
        </p>
      </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "SignIn",
  computed: {
    ...mapGetters(['getEmail'])
  },
  data() {
    return {
      errors: [],
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login', 'setCurrentUser', 'validateEmail']),
    validate: async function (data){
      if (!data.email){
        this.$notify({
          title: "Bitte gib eine E-Mail an",
          type: 'error'
        })
        return false
      }else if (data.email && !await this.validateEmail(data.email)){
        this.$notify({
          title: "Bitte gib eine korrekte E-Mail an",
          type: 'error'
        })
      }else if (!data.password){
        this.$notify({
          title: "Bitte gib dein Passwort an",
          type: 'error'
        })
        return false
      } else {
        return true
      }
    },
    async login_user() {
      const credentials = {
          email: this.email,
          password: this.password
      }
      if (await this.validate(credentials)){
        await this.login(credentials)
        .then((res) => {
          this.setCurrentUser(res)
          this.$router.push('/')
          this.$notify({
            title: `Hallo ${res.forename}, willkommen :)`,
            type: 'success'
          })
        })
        .catch((error) => {
          this.$notify({
            title: error,
            type: 'error'
          })
        })
      }
    }
  },
  mounted() {
    this.email = this.getEmail
  }
}
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