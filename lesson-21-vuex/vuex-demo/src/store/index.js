import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store  = new Vuex.Store({
  /*
  * state 定义属性
  * mutations 出发属性改变的方法
  * getters 计算属性，对属性的过滤和操作：提取公共方法
  * actions 异步调用
  * modules 拆分模块
  *
  * */
 state:{
   count:1
 },
  mutations:{
   addCount(state){
     state.count++;
   },
    subCount(state){
     state.count--;
    }
  },
  getters:{

  },
 modules:{

 }
})


export default store
