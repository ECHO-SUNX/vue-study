<template>
  <div>
    <h2>count:{{$store.state.count}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
  export default {
    name: "Hello1",
    methods:{
      add(){
        this.$store.commit("addCount");
      },
      sub(){
        this.$store.commit("subCount");
      }
    }
  }
</script>

<style scoped>

</style>
