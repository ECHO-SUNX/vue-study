<template>
  <div class="tabbat-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    data:function () {
      return {
        /*isActive:true*/
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods:{
      itemClick:function () {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tabbat-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbat-item img{
     height: 28px;
     width: 28px;
     vertical-align: middle;
   }

  .active{
    font-weight: bold;
  }
</style>
