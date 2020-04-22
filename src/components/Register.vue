<template>
  <div class="sign-in-container">
      <form>
            <h1>Jetzt Registrieren</h1>
            <label for="forename">Vorname
                <input type="text" placeholder="Dein Vorname" v-model="forename"/>
            </label>
            <label for="surname">Nachname
                <input type="text" placeholder="Dein Nachname" v-model="surname"/>
            </label>
            <label for="email">E-Mail
                <input type="text" placeholder="Deine Email" v-model="email"/>
            </label>
            <label for="password">Passwort
                <input type="text" placeholder="Dein Passwort" v-model="password"/>
            </label>
            <label for="gitlab_repo_link">Gitlab Repository Link (SSH)
                <input type="text" placeholder="Link zu deinem Gitlab Repo" v-model="gitlab_repo_link"/>
            </label>
            <label for="matriculation_number">Immatrikulationsnummer
                <input type="text" placeholder="Immatrikulationsnummer" v-model="matriculation_number"/>
            </label>
            <input type="button" @click="register" value="Register" />
            <p v-if="msg">{{ msg }}</p>

            <p>
              <router-link to="/sign-in">Oder Einloggen</router-link>
            </p>
      </form>
      
  </div>
</template>

<script>
import AuthService from '../services/AuthService.js'

export default {
    name: "Register",
    data() {
        return {
            forename: '',
            surname: '',
            email: '',
            password: '',
            password_repeat: '',
            gitlab_repo_link: '',
            matriculation_number: '',
            msg: ''
        }
    },
    methods: {
    async register() {
      try {
        const credentials = {
          user: {
            forename: this.forename,
            surname: this.surname,
            email: this.email,
            password: this.password,
            gitlab_repo_link: this.gitlab_repo_link,
            matriculation_number: this.matriculation_number,
          }
        };
        const response = await AuthService.signUp(credentials)
        this.msg = response.msg
        this.$router.push('/')
      } catch (error) {
        this.msg = error.response.data.msg
      }
    }
  }
}
</script>

<style scoped>
label, input{
    display: block;
    text-align: center;
}
label{
    margin-top: 1rem;
}

input{
    line-height: 1.5rem;
    font-size: 1rem;
    width: 270px;
    margin: auto;
    border-radius: 7px;
    margin-bottom: 1rem;
    border-radius: 10px;
}

form{
    text-align: center;
    align-items: center;
    padding: 20px;
}

.sign-in-container{
    font-size: 1.5rem;
    margin: auto;
    text-align: right;
    max-width: 340px;
    background: cornflowerblue;
    border-radius: 20px;
    color: white;
}
button{
    border-radius: 10px;
    line-height: 1.5rem;
    font-size: 1rem;
}
</style>