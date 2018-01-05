import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/experiment/HelloWorld'
import AboutUs from '@/components/AboutUs'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Storage from '@/components/Storage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Product from '@/components/Product'
import Apitest from '@/components/experiment/Apitest'
import Htask from '@/components/experiment/Htask'
import Categories from '@/components/experiment/Categories'
import Shule from '@/components/experiment/Shule'
import m_AddProductss from '@/components/m_AddProductss'


Vue.use(Router)


export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/items',
      name: 'Hello',
      component: HelloWorld
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
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/apitest',
      name: 'Apitest',
      component: Apitest
    },
    {
      path: '/htask',
      name: 'Htask',
      component: Htask
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },

    {
      path: '/shule',
      name: 'Shule',
      component: Shule
    },
     { path: '/m_addproductss',
      name: 'm_AddProductss',
      component: m_AddProductss
    },
  ]
});
