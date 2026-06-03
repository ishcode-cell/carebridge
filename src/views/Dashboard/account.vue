<script setup>
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

const user = ref({
  name: 'Jean Claude',
  email: 'jean@example.com',
  phone: '+250 788 123 456',
  age: 28,
  location: 'Kigali, Rwanda'
})

const saveProfile = () => {
  localStorage.setItem('carebridge-profile', JSON.stringify(user.value))
  alert('Profile updated successfully!')
}
</script>

<template>
  <div class="p-8 min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-900 text-slate-100' : 'bg-gray-50'">

    <div class="mb-8">
      <h1 class="text-4xl font-bold transition-colors"
        :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
        My Account
      </h1>
      <p class="transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
        Manage your personal information.
      </p>
    </div>

    <div class="p-8 rounded-3xl shadow-lg max-w-4xl transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

      <div class="flex flex-col items-center mb-8">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
          alt="Profile"
          class="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
        />

        <button
          class="mt-4 px-4 py-2 rounded-lg transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-blue-700 hover:bg-blue-600 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'"
        >
          Change Photo
        </button>

      </div>

      <div class="grid md:grid-cols-2 gap-4">

        <input
          v-model="user.name"
          placeholder="Full Name"
          class="border p-3 rounded-xl transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <input
          v-model="user.email"
          placeholder="Email"
          class="border p-3 rounded-xl transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <input
          v-model="user.phone"
          placeholder="Phone Number"
          class="border p-3 rounded-xl transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <input
          v-model="user.age"
          type="number"
          placeholder="Age"
          class="border p-3 rounded-xl transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <input
          v-model="user.location"
          placeholder="Location"
          class="border p-3 rounded-xl md:col-span-2 transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

      </div>

      <button
        @click="saveProfile"
        class="mt-6 px-6 py-3 rounded-xl font-bold transition-colors"
        :class="settingsStore.isDark 
          ? 'bg-blue-700 hover:bg-blue-600 text-white' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'"
      >
        Save Changes
      </button>

    </div>

  </div>
</template>