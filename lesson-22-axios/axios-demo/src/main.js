import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*1.基本调用*/

/*axios({
  url:'http://httpbin.org/get',
  method:'get'
}).then(res=>{
  console.log(res);
});*/

/*2.并发请求*/

/*axios.all([
  axios({url: 'http://httpbin.org/get'}),
  axios({url: 'http://httpbin.org/get'})
]).then(res => {
  console.log(res);
})*/

/*3.实例配置*/
const instance = axios.create({
  baseURL:'http://httpbin.org',
  timeout: 5*1000
});

instance.get('/get').then(res=>{
  console.log(res);
})
