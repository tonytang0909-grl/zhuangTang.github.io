import { createRouter, createWebHashHistory } from 'vue-router'
import MainBox from '../views/MainBox.vue'
import routesConfig from './config.js'
const routes = [
  {
    path: '/',
    name: 'MainBox',
    component: MainBox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

routesConfig.forEach(item => {
  router.addRoute("MainBox", item)
}) 

export default router
