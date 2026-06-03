<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const route = useRoute()
const settingsStore = useSettingsStore()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}

const isActive = (path) => {
  return route.path === path
}
</script>

<template>
  <aside class="w-64 min-h-screen p-6 text-white transition-colors duration-500"
    :class="settingsStore.isDark 
      ? 'bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900'
      : 'bg-gradient-to-b from-blue-800 via-blue-700 to-blue-900 shadow-2xl'">

    <!-- LOGO -->
    <div class="mb-10">
      <h2 class="text-3xl font-extrabold tracking-wide">
        CareBridge
      </h2>
      <p class="text-sm mt-1 transition-colors"
        :class="settingsStore.isDark ? 'text-slate-300' : 'text-blue-100'">
        Healthcare Dashboard
      </p>
    </div>

    <!-- LINKS -->
    <ul class="space-y-3">

      <li>
        <router-link
          to="/dashboard"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                 hover:pl-6"
          :class="[
            isActive('/dashboard') ? 'bg-white/15 border-l-4 border-white' : '',
            settingsStore.isDark ? 'hover:bg-white/10' : 'hover:bg-white/10'
          ]"
        >
          📊 Dashboard
        </router-link>
      </li>

      <li>
        <router-link
          to="/dashboard/location"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                 hover:pl-6"
          :class="[
            isActive('/dashboard/location') ? 'bg-white/15 border-l-4 border-white' : '',
            settingsStore.isDark ? 'hover:bg-white/10' : 'hover:bg-white/10'
          ]"
        >
          📍 Location
        </router-link>
      </li>

      <li>
        <router-link
          to="/dashboard/users"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                 hover:pl-6"
          :class="[
            isActive('/dashboard/users') ? 'bg-white/15 border-l-4 border-white' : '',
            settingsStore.isDark ? 'hover:bg-white/10' : 'hover:bg-white/10'
          ]"
        >
          👥 Users
        </router-link>
      </li>

      <li>
        <router-link
          to="/dashboard/booking"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                 hover:pl-6"
          :class="[
            isActive('/dashboard/booking') ? 'bg-white/15 border-l-4 border-white' : '',
            settingsStore.isDark ? 'hover:bg-white/10' : 'hover:bg-white/10'
          ]"
        >
          📅 Bookings
        </router-link>
      </li>

      <li>
        <router-link
          to="/dashboard/account"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                 hover:pl-6"
          :class="[
            isActive('/dashboard/account') ? 'bg-white/15 border-l-4 border-white' : '',
            settingsStore.isDark ? 'hover:bg-white/10' : 'hover:bg-white/10'
          ]"
        >
          👤 Account
        </router-link>
      </li>

      <li>
        <router-link
          to="/dashboard/settings"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                 hover:pl-6"
          :class="[
            isActive('/dashboard/settings') ? 'bg-white/15 border-l-4 border-white' : '',
            settingsStore.isDark ? 'hover:bg-white/10' : 'hover:bg-white/10'
          ]"
        >
          ⚙️ Settings
        </router-link>
      </li>

    </ul>

    <!-- LOGOUT -->
    <div class="mt-10 pt-6 transition-colors"
      :class="settingsStore.isDark ? 'border-slate-600' : 'border-white/20'">

      <button
        @click="logout"
        class="w-full flex items-center justify-center gap-2
               py-3 rounded-xl font-bold transition"
        :class="settingsStore.isDark 
          ? 'bg-red-900 hover:bg-red-800 text-red-100' 
          : 'bg-red-500/90 hover:bg-red-500 text-white'"
      >
        🚪 Logout
      </button>

    </div>

  </aside>
</template>