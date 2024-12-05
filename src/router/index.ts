import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import TabsView from '../views/TabsView.vue'
import Tab1 from '../views/Tab1.vue'
import Tab2 from '../views/Tab2.vue'
import Tab3 from '../views/Tab3.vue'

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
  },
  {
    path: '/',
    redirect: '/auth',
  },
  {
    path: '/tabs',
    name: 'Tabs',
    component: TabsView,
    children: [
      {
        path: 'tab1',
        name: 'Tab1',
        component: Tab1,
      },
      {
        path: 'tab2',
        name: 'Tab2',
        component: Tab2,
      },
      {
        path: 'tab3',
        name: 'Tab3',
        component: Tab3,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
