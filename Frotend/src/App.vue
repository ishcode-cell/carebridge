<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

const isDark = ref(false)

function applyTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  applyTheme()
})
</script>

<template>
  <div
    :class="[
      'min-h-screen transition-colors duration-500',
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-950'
    ]"
  >
    <router-view />
  </div>
</template>