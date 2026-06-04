import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

import Home from '../views/home.vue'
import Contact from '../views/contact.vue'
import Services from '../views/service.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import about from '../views/about.vue'

import Dashboard from '../views/Dashboard/dashboard.vue'
import Location from '../views/Dashboard/location.vue'
import Users from '../views/Dashboard/users.vue'
import Booking from '../views/Dashboard/booking.vue'
import account from '../views/Dashboard/account.vue'
import settings from '../views/Dashboard/settings.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'services',
        component: Services
      },
      {
        path: 'contact',
        component: Contact
      },
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      },
      {
        path: 'about',
        component: about
      }
    ]
  },

  {
    path: '/dashboard',
    component: DashboardLayout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: Dashboard
      },
      {
        path: 'location',
        component: Location
      },
      {
        path: 'users',
        component: Users
      },
      {
        path: 'booking',
        component: Booking
      },
      {
        path: 'account',
        component: account
      },
      {
        path: 'settings',
        component: settings
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router