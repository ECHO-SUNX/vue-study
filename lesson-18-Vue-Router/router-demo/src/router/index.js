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

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component: Home,
      meta:{
        title:"home"
      }
    },
    {
      path:'/about',
      component: About,
      meta:{
        title:"about"
      }
    },
    {
      path:'/user/:name',
      component:User,
      meta:{
        title:"user"
      }
    },
    {
      path: '/profile',
      component: () => import('../components/Profile'),
      meta:{
        title:"profile"
      }
    }
  ],
  mode:'history'
})

router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title;
 next();
})

export default router
