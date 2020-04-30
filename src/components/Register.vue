<template>
  <div class="sign-in-container">
      <form @submit.prevent >
            <h1>Jetzt Registrieren</h1>
            <label for="forename">Vorname
                <input type="text" placeholder="Dein Vorname" v-model="forename" required/>
            </label>
            <label for="surname">Nachname
                <input type="text" placeholder="Dein Nachname" v-model="surname" required/>
            </label>
            <label for="email">E-Mail
                <input type="email" placeholder="Deine Email" v-model="email" required/>
            </label>
            <label for="password">Passwort
                <input type="password" placeholder="Dein Passwort" v-model="password" required/>
            </label>
            <label for="gitlab_repo_link">Gitlab Repository Link (SSH)
                <input type="url" placeholder="Link zu deinem Gitlab Repo" v-model="gitlab_repo_link" required/>
            </label>
            <label for="matriculation_number">Immatrikulationsnummer
                <input type="number" placeholder="Immatrikulationsnummer" v-model="matriculation_number" required/>
            </label>
            <input type="button" @click="register" value="Register" />
            <p>
              <router-link to="/sign-in">Oder Einloggen</router-link>
            </p>
      </form>
      
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
        }
    },
    methods: {
      ...mapActions(['signUp', 'validateEmail']),
      validateForm: async function(data){
        var anyMissing = false
        for (const attr in data.user){
          if (!data.user[attr]){
            this.$notify({
              title: `Das Feld ${attr} muss ausgefüllt sein`,
              type: 'error'
            })
            anyMissing = true
          }
          if (attr == "email"){
            if (!await this.validateEmail(data.user[attr])){
              this.$notify({
                title: "Bitte gib eine korrekte E-Mail an",
                type: 'error'
              })
              anyMissing = true
            }
          }
        }
        return !anyMissing
      },
      async register() {
        const credentials = {
          user: {
            forename: this.forename,
            surname: this.surname,
            email: this.email,
            password: this.password,
            gitlab_repo_link: this.gitlab_repo_link,
            matriculation_number: this.matriculation_number,
          }
        }
        if (await this.validateForm(credentials)){
          await this.signUp(credentials)
          .then((res) => {
            if (res){
              this.$router.push('/sign-in')
            }
          })
          .catch((error) =>{
            this.$notify({
            title: error,
            type: 'error'
            })
          })
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