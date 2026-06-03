<script setup>
import Sidebar from '../components/ui/Sidebar.vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="flex min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-gray-100'">
    
    <Sidebar />

    <main class="flex-1 p-6 transition-colors duration-500"
      :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-gray-100'">
      <router-view />
    </main>

  </div>
</template>