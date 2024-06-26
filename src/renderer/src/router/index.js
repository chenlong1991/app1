import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/setting' },
    // { path: '/home', component: () => import('../views/home/index.vue') },
    {
      path: '/setting',
      component: () => import('@renderer/views/SettingPage.vue'),
      children: [
        {
          path: 'translation',
          component: () => import('../views/TranslationSettings.vue')
        }
      ]
    }
  ]
})

export default router
