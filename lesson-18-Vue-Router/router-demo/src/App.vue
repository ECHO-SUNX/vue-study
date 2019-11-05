<template>
  <div id="app">
    <router-link to="/home" tag="button">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link :to="'/user/'+username">用户bbb</router-link>

    <hr>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      username:'bbb'
    }
  },
  methods:{
    homeClick:function () {
      //push 多次点击的时候会报错
      /*this.$router.push('/home')*/
      this.$router.replace('/home')
      console.log('home');
    },
    aboutClick:function () {
      /*this.$router.push('about')*/
      this.$router.replace('/about')
      console.log('about');
    }
  }
}
</script>

<style>

</style>
