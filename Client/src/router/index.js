import Vue from 'vue'
import Router from 'vue-router'
import AboutUs from '@/components/AboutUs'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Storage from '@/components/Storage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import m_AddProductss from '@/components/m_AddProductss'
import m_AboutUs from '@/components/m_AboutUs'

Vue.use(Router)


export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/storage',
      name: 'Storage',
      component: Storage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/m_addproductss',
      name: 'm_AddProductss',
      component: m_AddProductss
    },
    {
      path: '/m_aboutus',
      name: 'm_AboutUs',
      component: m_AboutUs
    }
  ]
});
