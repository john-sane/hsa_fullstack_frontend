<template>
  <div class="users-page">
    <h2>Hallo {{current_user.forename}}, diese Nutzer sind registriert:</h2>
    <ul>
      <li v-for="user in users" :key='user.email'>
        <User :user=user></User>
      </li>
    </ul>
  </div>
</template>

<script>
import User from './User.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserList',
  components: {
      User
    },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  computed: {
    ...mapGetters(
      {
        users: 'getUsers',
        current_user: 'getUser',
      })
    },
  created() {
    try {
      this.fetchUsers()
    } catch (error) {
      this.$router.push('/')
    }
    
  }
};
</script>

<style scoped>
h2{
  margin: auto;
  margin-bottom: 2rem;
}
ul{
  list-style-type: none;
  max-width: 500px;
  margin: auto;
}
li{
  margin: 10px;
}
</style>