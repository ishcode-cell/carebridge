<script setup>
import { useRouter } from 'vue-router'

import {
  HomeIcon,
  MapPinIcon,
  UsersIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon
} from '@heroicons/vue/24/solid'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<template>
  <aside
    class="w-72 min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-cyan-600 text-white shadow-2xl flex flex-col"
  >

    <!-- Logo -->
    <div class="p-6 border-b border-white/20">
      <div class="flex items-center gap-3">

        <HeartIcon class="w-8 h-8 text-cyan-300" />

        <div>
          <h1 class="text-2xl font-extrabold tracking-wider">
            CareBridge
          </h1>

          <p class="text-sm text-blue-100">
            Healthcare Platform
          </p>
        </div>

      </div>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 p-4">

      <ul class="space-y-2">

        <li>
          <router-link
            to="/dashboard"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition font-bold"
          >
            <HomeIcon class="w-5 h-5" />
            DASHBOARD
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard/location"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition font-bold"
          >
            <MapPinIcon class="w-5 h-5" />
            LOCATION
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard/users"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition font-bold"
          >
            <UsersIcon class="w-5 h-5" />
            USERS
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard/booking"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition font-bold"
          >
            <CalendarDaysIcon class="w-5 h-5" />
            BOOKINGS
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard/account"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition font-bold"
          >
            <UserCircleIcon class="w-5 h-5" />
            ACCOUNT
          </router-link>
        </li>

        <li>
          <router-link
            to="/dashboard/settings"
            class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/20 transition font-bold"
          >
            <Cog6ToothIcon class="w-5 h-5" />
            SETTINGS
          </router-link>
        </li>

      </ul>

    </nav>

    <!-- Logout -->
    <div class="p-4 border-t border-white/20">

      <button
        @click="logout"
        class="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold transition"
      >
        <ArrowRightOnRectangleIcon class="w-5 h-5" />
        LOGOUT
      </button>

    </div>

  </aside>
</template>