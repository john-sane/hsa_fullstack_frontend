<template>
  <div>
    <ul>
      <li v-for="user in users" :key=user>
        <User :user=user></User>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import User from './User.vue'

export default {
  name: 'UserList',
  components: {
      User
    },
  data() {
    return {
      users: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:4000/api/users`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.users = response.data.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>