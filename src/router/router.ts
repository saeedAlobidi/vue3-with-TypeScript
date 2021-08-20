import { RouteRecordRaw } from 'vue-router'
import Home from '../views/view/home/Home.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    props: true,
    component: Home
  },
  {
    path: '/about',
    props: true,
    name: 'About',
    
    component: () => import('../views/view/about/About.vue')
  }
]

 
export default routes
