<script setup>
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
const name = ref('')
const date = ref('')
const hospital = ref('')

const submitBooking = () => {
  alert(`Booking confirmed for ${name.value}`)
}
</script>

<template>
  <div class="p-6 rounded-xl shadow max-w-md mx-auto transition-colors"
    :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

    <h2 class="text-2xl font-bold mb-4 transition-colors"
      :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
      Book Appointment
    </h2>

    <input
      v-model="name"
      placeholder="Full Name"
      class="w-full border p-2 mb-3 rounded transition-colors"
      :class="settingsStore.isDark 
        ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
        : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
    >

    <input
      v-model="hospital"
      placeholder="Hospital Name"
      class="w-full border p-2 mb-3 rounded transition-colors"
      :class="settingsStore.isDark 
        ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
        : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
    >

    <input
      v-model="date"
      type="date"
      class="w-full border p-2 mb-3 rounded transition-colors"
      :class="settingsStore.isDark 
        ? 'bg-slate-700 text-slate-100 border-slate-600' 
        : 'bg-white text-slate-950 border-gray-300'"
    >

    <button
      @click="submitBooking"
      class="w-full py-2 rounded transition"
      :class="settingsStore.isDark 
        ? 'bg-blue-700 hover:bg-blue-600 text-white' 
        : 'bg-blue-600 hover:bg-blue-700 text-white'"
    >
      Confirm Booking
    </button>

  </div>
</template>