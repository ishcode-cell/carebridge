<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <nav
    class="shadow-lg transition-colors duration-500"
    :class="
      settingsStore.isDark
        ? 'bg-slate-950 text-slate-100'
        : 'bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 text-white'
    "
  >
    <div class="container mx-auto px-8 py-4 flex flex-wrap justify-between items-center gap-4">

      <router-link
        to="/"
        class="text-3xl font-extrabold tracking-wider"
      >
        CareBridge
      </router-link>

      <div class="flex flex-wrap items-center gap-5">
        <router-link
          to="/"
          class="uppercase font-bold tracking-widest relative group"
        >
          {{ settingsStore.labels.home }}
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link
          to="/about"
          class="uppercase font-bold tracking-widest relative group"
        >
          {{ settingsStore.labels.about }}
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link
          to="/services"
          class="uppercase font-bold tracking-widest relative group"
        >
          {{ settingsStore.labels.services }}
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link
          to="/contact"
          class="uppercase font-bold tracking-widest relative group"
        >
          {{ settingsStore.labels.contact }}
          <span class="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        </router-link>

        <router-link
          to="/login"
          class="uppercase font-bold tracking-widest border border-white px-5 py-2 rounded-xl transition hover:scale-105"
        >
          {{ settingsStore.labels.login }}
        </router-link>
      </div>

      <div class="flex items-center gap-3">
        <select
          v-model="settingsStore.language"
          @change="settingsStore.setLanguage(settingsStore.language)"
          class="rounded-2xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white outline-none backdrop-blur transition duration-300"
        >
          <option
            v-for="option in settingsStore.languages"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>

        <button
          @click="settingsStore.toggleTheme()"
          class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          :aria-label="settingsStore.isDark ? settingsStore.labels.lightMode : settingsStore.labels.darkMode"
        >
          <span v-if="settingsStore.isDark">☀️ {{ settingsStore.labels.lightMode }}</span>
          <span v-else>🌙 {{ settingsStore.labels.darkMode }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>
