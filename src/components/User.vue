<template>
  <div class="user">
      <div class="name">
        {{user["forename"]}}
        {{user["surname"]}}
      </div>
      <hr/>
      <div class="info">
        {{user["email"]}}
        {{user["matriculation_number"]}}
      </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: {
    user: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user{
  border: 1px;
  border-radius: 10px;
  background-color: darkcyan;
  padding: 10px;
  margin-bottom: 10px;
}
.name{
  size: 1.5rem;
  color: white;
}
.info{
  size: 1rem;
  color: aquamarine;
}
hr{
  color: cyan;
}
</style>