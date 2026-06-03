<script setup>
import { computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()

const selectedLanguage = computed({
  get: () => settingsStore.language,
  set: value => settingsStore.setLanguage(value)
})

const selectedTheme = computed({
  get: () => settingsStore.theme,
  set: value => settingsStore.setTheme(value)
})

const notificationsEnabled = computed({
  get: () => settingsStore.notifications,
  set: value => settingsStore.setNotifications(value)
})

const saveSettings = () => {
  settingsStore.setLanguage(selectedLanguage.value)
  settingsStore.setTheme(selectedTheme.value)
  settingsStore.setNotifications(notificationsEnabled.value)
  alert(settingsStore.labels.saveSettings + ' ✅')
}
</script>

<template>
  <div
    class="p-8 min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-950'"
  >
    <div class="mb-8">
      <h1
        class="text-4xl font-bold"
        :class="settingsStore.isDark ? 'text-cyan-300' : 'text-sky-700'"
      >
        {{ settingsStore.labels.settings }}
      </h1>

      <p class="text-sm opacity-80">
        {{ settingsStore.labels.customize }}
      </p>
    </div>

    <div
      class="bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-2xl backdrop-blur-sm max-w-4xl"
    >
      <div class="mb-8 grid gap-6 md:grid-cols-2">
        <div>
          <label class="block text-sm font-bold mb-2">
            {{ settingsStore.labels.language }}
          </label>

          <select
            v-model="selectedLanguage.value"
            class="w-full rounded-3xl border border-slate-300 px-4 py-3 transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
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

        <div>
          <label class="block text-sm font-bold mb-2">
            {{ settingsStore.labels.selectTheme }}
          </label>

          <select
            v-model="selectedTheme.value"
            class="w-full rounded-3xl border border-slate-300 px-4 py-3 transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
          >
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>

      <div class="flex items-center justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-5 mb-8 shadow-inner">
        <div>
          <p class="font-semibold">{{ settingsStore.labels.emailNotifications }}</p>
          <p class="text-sm opacity-70">{{ settingsStore.labels.notifications }}</p>
        </div>
        <label class="inline-flex items-center gap-3 cursor-pointer">
          <span class="text-sm">{{ notificationsEnabled.value ? 'ON' : 'OFF' }}</span>
          <input
            type="checkbox"
            class="h-5 w-5 rounded border-slate-300 text-cyan-600 shadow-sm focus:ring-cyan-500"
            v-model="notificationsEnabled.value"
          />
        </label>
      </div>

      <div class="mt-8 flex flex-wrap gap-4">
        <button
          class="rounded-3xl bg-amber-500 px-6 py-3 text-white shadow-xl transition hover:bg-amber-400"
          type="button"
        >
          {{ settingsStore.labels.changePassword }}
        </button>

        <button
          class="rounded-3xl bg-rose-600 px-6 py-3 text-white shadow-xl transition hover:bg-rose-500"
          type="button"
        >
          {{ settingsStore.labels.deleteAccount }}
        </button>
      </div>

      <button
        @click="saveSettings"
        class="mt-10 inline-flex items-center justify-center rounded-full bg-sky-600 px-8 py-3 text-white font-bold shadow-2xl transition hover:bg-sky-500"
      >
        {{ settingsStore.labels.saveSettings }}
      </button>
    </div>
  </div>
</template>
