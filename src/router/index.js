import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/register'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/register',
      component: Register,
      name: 'Register',
    },
    {
      path: '/login',
      component: Login,
      name: 'Login',
    },
  ],
  mode: 'history',
})
