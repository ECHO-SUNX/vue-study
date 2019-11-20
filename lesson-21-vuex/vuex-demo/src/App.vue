<template>
  <div id="app">
    <h2>hello</h2>
    <hello1></hello1>
    <hello2></hello2>
  </div>
</template>
<script>
  import Hello1 from './components/Hello1'
  import Hello2 from './components/Hello2'
  export default {
    name: "Hello2",
    components:{
      hello1:Hello1,
      hello2:Hello2
    }
  }

</script>
<style>

</style>
