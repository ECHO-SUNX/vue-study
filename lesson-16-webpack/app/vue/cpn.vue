<template>
  <div>
    <h2 class="red">{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: "cpn",
    data() {
      return {
        msg: "Hello Vue.js"
      }
    }
  }
</script>

<style scoped>
.red{
  color: red;
}
</style>
