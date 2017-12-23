import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Storage from '@/components/Storage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Sadi_Products from '@/components/Sadi_Products'
import TestApi from '@/components/TestApi'
import Htask from '@/components/Htask'
import Categories from '@/components/Categories'
import Sadi_AddProduct from '@/components/Sadi_AddProduct'
import Sadi_TestingEditDelProduct from '@/components/Sadi_TestingEditDelProduct'
import m_AddProductss from '@/components/m_AddProductss'

Vue.use(Router)


export default new Router({
<<<<<<< HEAD
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
        path: '/sadi_products',
        name: 'Sadi_Products',
        component: Sadi_Products
      },
      {
        path: '/testapi',
        name: 'TestApi',
        component: TestApi
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
        path: '/sadi_addproduct',
        name: 'Sadi_AddProduct',
        component: Sadi_AddProduct
      },
      {
        path: '/sadi_testingeditdelproduct',
        name: 'Sadi_TestingEditDelProduct',
        component: Sadi_TestingEditDelProduct
      },
    ]
=======
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
    }
  ]
>>>>>>> upstream/master
});
