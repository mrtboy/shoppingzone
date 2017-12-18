import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Storage from '@/components/Storage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Products from '@/components/Products'
import TestApi from '@/components/TestApi'
import Htask from '@/components/Htask'
import Categories from '@/components/Categories'
import AddProduct from '@/components/AddProduct'

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
        path: '/products',
        name: 'Products',
        component: Products
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
        path: '/addproduct',
        name: 'AddProduct',
        component: AddProduct
      },
    ]
});
