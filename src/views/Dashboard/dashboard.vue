<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="min-h-screen p-8 transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-900 text-slate-100' : 'bg-gray-50'">

    <!-- HEADER -->
    <div class="mb-10">
      <h1 class="text-4xl font-extrabold transition-colors"
        :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
        Dashboard Overview
      </h1>

      <p class="mt-2 transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
        Welcome back! Manage users, bookings, and hospital locations.
      </p>
    </div>

    <!-- STATS CARDS -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div class="p-6 rounded-2xl shadow border-l-4 border-blue-600 transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
        <h3 class="font-semibold transition-colors"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">Total Users</h3>
        <p class="text-3xl font-bold transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">1,250</p>
      </div>

      <div class="p-6 rounded-2xl shadow border-l-4 border-green-500 transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
        <h3 class="font-semibold transition-colors"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">Appointments</h3>
        <p class="text-3xl font-bold transition-colors"
          :class="settingsStore.isDark ? 'text-green-400' : 'text-green-600'">320</p>
      </div>

      <div class="p-6 rounded-2xl shadow border-l-4 border-purple-500 transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
        <h3 class="font-semibold transition-colors"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">Hospitals Nearby</h3>
        <p class="text-3xl font-bold transition-colors"
          :class="settingsStore.isDark ? 'text-purple-400' : 'text-purple-600'">48</p>
      </div>

    </div>

    <!-- ACTIVITY + QUICK INFO -->
    <div class="grid md:grid-cols-2 gap-6 mt-10">

      <!-- RECENT ACTIVITY -->
      <div class="p-6 rounded-2xl shadow border-l-4 border-blue-200 transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

        <h2 class="text-xl font-bold mb-4 transition-colors"
          :class="settingsStore.isDark ? 'text-slate-100' : 'text-gray-800'">
          Recent Activity
        </h2>

        <ul class="space-y-3 transition-colors"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
          <li>✔ New user registered</li>
          <li>✔ Appointment booked successfully</li>
          <li>✔ Hospital data updated</li>
          <li>✔ System settings changed</li>
        </ul>

      </div>

      <!-- QUICK INFO -->
      <div class="p-6 rounded-2xl shadow border-l-4 border-blue-300 transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

        <h2 class="text-xl font-bold mb-4 transition-colors"
          :class="settingsStore.isDark ? 'text-slate-100' : 'text-gray-800'">
          System Info
        </h2>

        <p class="leading-relaxed transition-colors"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
          CareBridge dashboard allows administrators to manage users,
          monitor bookings, and control hospital data efficiently.
        </p>

        <div class="mt-4 flex gap-3 flex-wrap">

          <span class="px-3 py-1 rounded-full text-sm transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-blue-900 text-blue-200' 
              : 'bg-blue-100 text-blue-700'">
            Secure
          </span>

          <span class="px-3 py-1 rounded-full text-sm transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-green-900 text-green-200' 
              : 'bg-green-100 text-green-700'">
            Fast
          </span>

          <span class="px-3 py-1 rounded-full text-sm transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-purple-900 text-purple-200' 
              : 'bg-purple-100 text-purple-700'">
            Reliable
          </span>

        </div>

      </div>

    </div>

  </div>
</template>