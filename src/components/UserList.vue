<template>
  <div>
    <ul>
      <li v-for="user in users" :key='user.email'>
        <User :user=user></User>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';
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
        users: 'getUsers'
      })
    },
  created() {
    this.fetchUsers()
  }

  // Fetches posts when the component is created.
  //created() {
  //  axios.get(`http://localhost:4000/api/users`)
  //  .then(response => {
  //    // JSON responses are automatically parsed.
  //    this.users = response.data.data
  //  })
  //  .catch(e => {
  //    this.errors.push(e)
  //  })
  //}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style-type: none;
  max-width: 500px;
}
li{
  margin: 10px;
}
</style>