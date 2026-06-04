<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <nav
    class="shadow-lg transition-colors duration-500"
    :class="
      settingsStore?.isDark
        ? 'bg-slate-950 text-slate-100'
        : 'bg-gradient-to-r from-sky-700 via-cyan-600 to-teal-500 text-white'
    "
  >
    <div class="container mx-auto px-8 py-4 flex flex-wrap justify-between items-center gap-4">

      <!-- LOGO -->
      <router-link
        to="/"
        class="flex items-center gap-3 hover:opacity-90 transition"
      >
        <img src="/logo.png" alt="CareBridge Logo" class="h-22 w-auto object-contain" />
        <span class="text-3xl font-extrabold tracking-wider">CareBridge</span>
      </router-link>

      <!-- LINKS -->
      <div class="flex flex-wrap items-center gap-6 text-sm md:text-base">

        <router-link to="/" class="uppercase font-bold tracking-widest hover:opacity-80 transition">
          {{ settingsStore?.labels?.home || 'Home' }}
        </router-link>

        <router-link to="/about" class="uppercase font-bold tracking-widest hover:opacity-80 transition">
          {{ settingsStore?.labels?.about || 'About' }}
        </router-link>

        <router-link to="/services" class="uppercase font-bold tracking-widest hover:opacity-80 transition">
          {{ settingsStore?.labels?.services || 'Services' }}
        </router-link>

        <router-link to="/contact" class="uppercase font-bold tracking-widest hover:opacity-80 transition">
          {{ settingsStore?.labels?.contact || 'Contact' }}
        </router-link>

        <router-link
          to="/login"
          class="uppercase font-bold tracking-widest border border-white px-4 py-2 rounded-xl hover:scale-105 transition"
        >
          {{ settingsStore?.labels?.login || 'Login' }}
        </router-link>
      </div>

      <!-- CONTROLS -->
      <div class="flex items-center gap-3">

        <!-- LANGUAGE -->
        <select
          v-model="settingsStore.language"
          @change="settingsStore.setLanguage(settingsStore.language)"
          class="rounded-xl border border-white/30 bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur outline-none"
        >
          <option
            v-for="lang in (settingsStore?.languages || ['EN'])"
            :key="lang"
            :value="lang"
          >
            {{ lang }}
          </option>
        </select>

        <!-- THEME TOGGLE -->
        <button
          @click="settingsStore.toggleTheme()"
          class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 transition"
        >
          <span v-if="settingsStore?.isDark">
            ☀️ {{ settingsStore?.labels?.lightMode || 'Light' }}
          </span>
          <span v-else>
            🌙 {{ settingsStore?.labels?.darkMode || 'Dark' }}
          </span>
        </button>

      </div>
    </div>
  </nav>
</template>