import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/experiment/HelloWorld'
import AboutUs from '@/components/AboutUs'
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
import m_AboutUs from '@/components/m_AboutUs'
import m_ContactUs from '@/components/m_ContactUs'
import AddProduct from '@/components/Product/Add'
import EditProduct from '@/components/Product/Edit'
import IndexProduct from '@/components/Product/Index'
import Products from '@/components/Products'



Vue.use(Router)


export default new Router({

    routes: [{
            path: '/',
            name: 'Home',
            component: Home
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
      {
        path: '/m_addproductss',
        name: 'm_AddProductss',
        component: m_AddProductss
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
    {
      path: '/m_aboutus',
      name: 'm_AboutUs',
      component: m_AboutUs
    },
    {
      path: '/m_contactUs',
      name: ' m_ContactUs',
      component: m_ContactUs
    },
    {
      path: '/manage/products/edit/:id',
      name: 'EditProduct',
      component: EditProduct,
      meta: {
          requiresAuth: true
      }
  },
  {
      path: '/productdetail/:id',
      name: 'ProductDetail',
      component: ProductDetail
  },
  {
      path: '/manage/products/index',
      name: 'IndexProduct',
      component: IndexProduct,
      meta: {
          requiresAuth: true
      }
  },
  {
    path: '/manage/products/edit/:id',
    name: 'EditProduct',
    component: EditProduct,
    meta: {
        requiresAuth: true
    }
},
{
    path: '/productdetail/:id',
    name: 'ProductDetail',
    component: ProductDetail
},
{
    path: '/manage/products/index',
    name: 'IndexProduct',
    component: IndexProduct,
    meta: {
        requiresAuth: true
    }
},
{
  path: '/manage/products/add',
  name: 'AddProduct',
  component: AddProduct,
  meta: {
      requiresAuth: true
  }
},

  ]
});
