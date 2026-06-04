<script setup>
import { computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

const selectedTheme = computed({
  get: () => settingsStore.theme,
  set: (value) => settingsStore.setTheme(value)
})

const selectedLanguage = computed({
  get: () => settingsStore.language,
  set: (value) => settingsStore.setLanguage(value)
})

const notificationsEnabled = computed({
  get: () => settingsStore.notifications,
  set: (value) => settingsStore.setNotifications(value)
})

const appointmentReminders = computed({
  get: () => settingsStore.appointmentReminders,
  set: (value) => settingsStore.setAppointmentReminders(value)
})

const smsAlerts = computed({
  get: () => settingsStore.smsAlerts,
  set: (value) => settingsStore.setSmsAlerts(value)
})

const publicProfile = computed({
  get: () => settingsStore.publicProfile,
  set: (value) => settingsStore.setPublicProfile(value)
})

const shareLocation = computed({
  get: () => settingsStore.shareLocation,
  set: (value) => settingsStore.setShareLocation(value)
})

const medicalRecommendations = computed({
  get: () => settingsStore.medicalRecommendations,
  set: (value) => settingsStore.setMedicalRecommendations(value)
})

const twoFactorAuth = computed({
  get: () => settingsStore.twoFactorAuth,
  set: (value) => settingsStore.setTwoFactorAuth(value)
})

const saveSettings = () => {
  alert('Settings saved successfully ✅')
}
</script>

<template>
  <div
    class="p-8 min-h-screen"
    :class="settingsStore.isDark ? 'bg-slate-950 text-white' : 'bg-slate-100'"
  >
    <div class="mb-10">
      <h1 class="text-4xl font-bold text-blue-600">
        SETTINGS
      </h1>

      <p class="text-gray-500">
        Manage your account and application preferences
      </p>
    </div>

    <div
      class="max-w-6xl rounded-3xl p-8 shadow-2xl"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
    >

      <!-- Appearance -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 text-blue-600">
          Appearance
        </h2>

        <select
          v-model="selectedTheme"
          class="w-full p-4 border rounded-xl text-black"
        >
          <option value="Light">Light</option>
          <option value="Dark">Dark</option>
        </select>
      </div>

      <!-- Language -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 text-blue-600">
          Language
        </h2>

        <select
          v-model="selectedLanguage"
          class="w-full p-4 border rounded-xl text-black"
        >
          <option
            v-for="lang in settingsStore.languages"
            :key="lang"
            :value="lang"
          >
            {{ lang }}
          </option>
        </select>
      </div>

      <!-- Notifications -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 text-blue-600">
          Notifications
        </h2>

        <div class="space-y-5">

          <div class="flex justify-between items-center">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              v-model="notificationsEnabled"
            />
          </div>

          <div class="flex justify-between items-center">
            <span>Appointment Reminders</span>
            <input
              type="checkbox"
              v-model="appointmentReminders"
            />
          </div>

          <div class="flex justify-between items-center">
            <span>SMS Alerts</span>
            <input
              type="checkbox"
              v-model="smsAlerts"
            />
          </div>

        </div>
      </div>

      <!-- Privacy -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 text-blue-600">
          Privacy
        </h2>

        <div class="space-y-5">

          <div class="flex justify-between items-center">
            <span>Public Profile</span>
            <input
              type="checkbox"
              v-model="publicProfile"
            />
          </div>

          <div class="flex justify-between items-center">
            <span>Share Location with Hospitals</span>
            <input
              type="checkbox"
              v-model="shareLocation"
            />
          </div>

          <div class="flex justify-between items-center">
            <span>Medical Recommendations</span>
            <input
              type="checkbox"
              v-model="medicalRecommendations"
            />
          </div>

        </div>
      </div>

      <!-- Security -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 text-blue-600">
          Security
        </h2>

        <div class="flex justify-between items-center mb-5">
          <span>Two Factor Authentication</span>

          <input
            type="checkbox"
            v-model="twoFactorAuth"
          />
        </div>

        <div class="grid md:grid-cols-2 gap-4">

          <button
            class="bg-amber-500 text-white p-4 rounded-xl hover:bg-amber-400"
          >
            Change Password
          </button>

          <button
            class="bg-green-600 text-white p-4 rounded-xl hover:bg-green-500"
          >
            Security Center
          </button>

        </div>
      </div>

      <!-- System -->
      <div class="mb-10">
        <h2 class="text-2xl font-bold mb-6 text-blue-600">
          System Information
        </h2>

        <div class="space-y-3">
          <p><strong>App:</strong> CareBridge</p>
          <p><strong>Version:</strong> 1.0.0</p>
          <p>
            <strong>Status:</strong>
            <span class="text-green-500 font-bold">Online</span>
          </p>
        </div>
      </div>

      <!-- Danger Zone -->
      <div
        class="border-t pt-8"
        :class="settingsStore.isDark ? 'border-slate-700' : 'border-gray-300'"
      >
        <h2 class="text-2xl font-bold mb-6 text-red-500">
          Danger Zone
        </h2>

        <button
          class="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-500"
        >
          Delete Account
        </button>
      </div>

      <button
        @click="saveSettings"
        class="mt-10 w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-500"
      >
        SAVE ALL SETTINGS
      </button>

    </div>
  </div>
</template>