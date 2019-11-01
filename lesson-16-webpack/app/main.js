const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());


import Vue from 'vue'
/*import cpn from './vue/cpn.js'*/
import cpn from './vue/cpn.vue'


new Vue({
  el:'#app',
  template:'<cpn/>',
  components:{
    cpn
  }
});
