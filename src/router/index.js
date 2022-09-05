import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    // {
    //   // 懒加载
    //   path: '/about',
    //   name: 'about',
    //   // 路线级别代码分隔
    //   // 这将为该路由生成一个单独的chunk(About.[hash].js)(碎块)
    //   // 当访问路由时，它是惰性加载的。
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/array',
      name: 'array',
      component: () => import('@/views/4-ThingArray.vue')
    },
    {
      path: '/modify',
      name: 'modify',
      component: () => import('@/views/5-EventModify.vue')
    },
    {
      path: '/sugar',
      name: 'sugar',
      component: () => import('@/views/6-GrammarSugar.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/7-BasicForm.vue')
    },
    {
      path: '/form2',
      name: 'form2',
      component: () => import('@/views/8-BasicForm2.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('@/views/9-MassageBoard.vue')
    },
    {
      path: '/tableM',
      name: 'tableM',
      component: () => import('@/views/10-SynthesizeTableM.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/views/11-Comouted1.vue')
    },
    {
      path: '/computed/apply',
      name: 'computedapply',
      component: () => import('@/views/11-ComputerApply.vue')
    },
    {
      path: '/computed/setter',
      name: 'computedsetter',
      component: () => import('@/views/11-ComputedSetter.vue')
    },
    {
      path: '/computed/table',
      name: 'computedtable',
      component: () => import('@/views/11-ComputedTable.vue')
    },
    {
      path: '/watch/basic',
      name: 'watchbasic',
      component: () => import('@/views/12-WatchBasic.vue')
    },
    {
      path: '/watch/immediate',
      name: 'watchimmediate',
      component: () => import('@/views/12-WatchImmediate.vue')
    },
    {
      path: '/watch/deep',
      name: 'watchdeep',
      component: () => import('@/views/12-WatchDeep.vue')
    },
    {
      path: '/tableM',
      name: 'tableM',
      component: () => import('@/views/0-12TableM.vue')
    },
    {
      path: '/downM',
      name: 'downM',
      component: () => import('@/views/0-12CountDown.vue')

    },
    {
      path: '/custom/data',
      name: 'customdata',
      component: () => import('@/views/13-CustomData.vue')

    },
    {
      path: '/switch/index',
      name: 'switchindex',
      component: () => import('@/views/14-SwitchIndex.vue')

    },
    {
      path: '/vueweekendtest1',
      name: 'vueweekendtest1',
      component: () => import('@/views/0-1weekendtest.vue')

    },


  ]
})

export default router
