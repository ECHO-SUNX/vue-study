import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

Vue.use(Router)


/*懒加载*/
const Home = ()=>import('../components/Home')
const About = ()=>import('../components/About')
const User = ()=>import('../components/User')

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home
    },
    {
      path:'/about',
      component: About
    },
    {
      path:'/user/:name',
      component:User
    }
  ],
  mode:'history'
})
