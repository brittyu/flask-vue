import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Home' },
  { path: '/category', component: 'Category' },
  { path: '/hot', component: 'Hot' },
  { path: '/login', component: 'Login' },
  { path: '/register', component: 'Register' },
  { path: '/about', component: 'About' },
  { path: '*', component: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  routes,
  mode: 'history'
})
