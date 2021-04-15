import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/home/Home2.vue'
import Home3 from '../views/home/Home3.vue'
import Home4 from '../views/home/Home4.vue'


const routes = [
  {
    path: '/', // path property 
    name: 'Home', // name property
    component: Home // component property
  },
  {
    path: '/Second-Home',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/Third-Home',
    name: 'Home3',
    component: Home3
  },
  {
    path: '/Fourth-Home',
    name: 'Home4',
    component: Home4
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
