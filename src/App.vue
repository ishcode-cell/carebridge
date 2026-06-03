<script setup>
import { onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

onMounted(() => {
  settingsStore.applyTheme()
})
</script>

<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-500',
      settingsStore.isDark
        ? 'bg-slate-950 text-slate-100'
        : 'bg-slate-50 text-slate-950'
    ]"
  >
    <router-view />
  </div>
</template>


