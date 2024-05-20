import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'
import ExceptionsView from '../views/ExceptionsView.vue'
import InputView from '../views/InputView.vue'
import MessagesView from '../views/MessagesView.vue'
import SettingsView from '../views/SettingsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfileView
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: AnalyticsView
    },
    {
      path: '/exceptions',
      name: 'exceptions',
      component: ExceptionsView
    },
    {
      path: '/input',
      name: 'input',
      component: InputView
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router
