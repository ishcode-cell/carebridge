<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <footer class="text-center p-4 transition-colors duration-500"
    :class="settingsStore.isDark 
      ? 'bg-slate-950 text-slate-100 border-t border-slate-800' 
      : 'bg-blue-700 text-white'">
    © 2026 CareBridge. All rights reserved.
  </footer>
</template>