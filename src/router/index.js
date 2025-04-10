import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'




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
      component: () => import('@/views/IllustrationsView.vue')
    },

    {
      path: '/pictures',
      name: 'Pictures',
      component: () => import('@/views/PicturesView.vue')
    },

    {
      path: '/ux',
      name: 'UX',
      component: () => import('@/views/UxView.vue')
    },

    {
      path: '/frontend development',
      name: 'FrontendDevelopment',
      component: () => import('@/views/FrontenddevView.vue')
    },

    {
      path: '/exams',
      name: 'Exams',
      component: () => import('@/views/ExamsView.vue')
    },

    {
      path: '/production',
      name: 'Production',
      component: () => import('@/views/ProductionView.vue')
    },


  { path: '/illustration2',
    name: 'illustration2',
    component: () => import('@/views/Illustration2View.vue')
  },

  { path: '/illustration3',
    name: 'illustration3',
    component: () => import('@/views/Illustration3View.vue')
  },

  { path: '/illustration4',
    name: 'illustration4',
    component: () => import('@/views/Illustration4View.vue')
  },


  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Gør scrollingen glidende
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})


export default router
