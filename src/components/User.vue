<template>
  <div>
      <div>
        {{user["forename"]}}
        {{user["surname"]}}
      </div>
      <div>
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
</style>