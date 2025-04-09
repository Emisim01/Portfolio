import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'

import Illustrations from '@/views/IllustrationsView.vue'
import Pictures from '@/views/PicturesView.vue'
import UX from '@/views/UxView.vue'
import FrontendDevelopment from '@/views/FrontenddevView.vue'
import Exams from '@/views/ExamsView.vue'
import Production from '@/views/ProductionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },

    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

    {
      path: '/illustrations',
      name: 'Illustrations',
      component: Illustrations
    },

    {
      path: '/pictures',
      name: 'Pictures',
      component: Pictures
    },

    {
      path: '/ux',
      name: 'UX',
      component: UX
    },

    {
      path: '/frontend development',
      name: 'FrontendDevelopment',
      component: FrontendDevelopment
    },

    {
      path: '/exams',
      name: 'Exams',
      component: Exams
    },

    {
      path: '/production',
      name: 'Production',
      component: Production
    }
  ],
})

export default router
