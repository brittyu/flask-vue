import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', view: 'Home' },
  { path: '/category', view: 'Category' },
  { path: '/hot', view: 'Hot' },
  { path: '/login', view: 'Login' },
  { path: '/register', view: 'Register' },
  { path: '/message', view: 'Message' },
  { path: '/about', view: 'About' },
  { path: '*', view: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.view}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
