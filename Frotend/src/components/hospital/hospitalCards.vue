<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

defineProps({
  hospital: Object
})
</script>

<template>
  <div class="p-6 rounded-xl shadow hover:shadow-lg transition-colors"
    :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
    <h2 class="text-xl font-bold transition-colors"
      :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
      {{ hospital.name }}
    </h2>

    <p class="transition-colors"
      :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
      {{ hospital.location }}
    </p>

    <p class="text-sm mt-2 transition-colors"
      :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-500'">
      {{ hospital.distance }} km away
    </p>

    <button class="mt-4 px-4 py-2 rounded transition"
      :class="settingsStore.isDark 
        ? 'bg-blue-700 hover:bg-blue-600 text-white' 
        : 'bg-blue-600 hover:bg-blue-700 text-white'">
      Book Appointment
    </button>
  </div>
</template>