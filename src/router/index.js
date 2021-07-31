import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [{
        path:"/",
        name: 'MainContent',
        component: () => import('../views/main-content/MainContentWrapper.vue')
      },
      {
        path:"/watch",
        name: 'Watch',
        component: () => import('../views/TimelineWrapper.vue')
      },
      {
        path:"/marketplace",
        name: 'MarketPlace',
        component: () => import('../views/TimelineWrapper.vue')
      },
      {
        path:"/groups",
        name: 'Group',
        component: () => import('../views/TimelineWrapper.vue')
      },
      {
        path:"/gaming",
        name: 'Gaming',
        component: () => import('../views/TimelineWrapper.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
