import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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

  //cool navbar scroll ned til hvad man trykker på

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', 
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },

})


export default router
