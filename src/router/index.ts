import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeComponentVue from '../components/HomeComponent.vue'
import AboutMeComponentVue from '../components/AboutMeComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponentVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMeComponentVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      
    }
  ]
})

export default router
