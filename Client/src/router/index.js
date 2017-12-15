import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Tasks from '@/components/Tasks'
import Storage from '@/components/Storage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
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
        path: '/AboutUs',
        name: 'AboutUs',
        component: AboutUs
      },
      {
        path: '/ContactUs',
        name: 'ContactUs',
        component: ContactUs
      }
    ]
});
