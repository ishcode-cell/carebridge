<script setup>
import Navbar from '../components/ui/Navbar.vue'
import Footer from '../components/ui/footer.vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-white'">
    <Navbar />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>