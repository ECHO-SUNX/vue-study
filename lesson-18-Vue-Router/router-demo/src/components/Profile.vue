<template>
  <div>
    <h2>这里是档案组件</h2>
    <h3>{{$route.query}}</h3>
    <h3>{{$route.query.name}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Profile"
  }
</script>

<style scoped>

</style>
