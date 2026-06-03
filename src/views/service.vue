<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-white'">

    <!-- HERO -->
    <section class="relative h-[70vh] flex items-center justify-center transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <img
        src="@/assets/images/services-hero.jpg"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Services"
      >

      <div class="absolute inset-0 bg-blue-950/70"></div>

      <div class="relative text-center text-white px-6">

        <h1
          class="text-5xl md:text-7xl font-bold mb-6"
        >
          {{ settingsStore.labels.services }}
        </h1>

        <p
          class="text-xl max-w-3xl mx-auto"
        >
          Discover how CareBridge helps patients connect with healthcare providers faster and more efficiently.
        </p>

      </div>

    </section>

    <!-- SERVICES GRID -->
    <section class="py-24 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-14 transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          What We Offer
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Hospital Finder -->
          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-5">🏥</div>

            <h3 class="text-2xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              {{ settingsStore.labels.hospitalFinder }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.hospitalFinderDesc }}
            </p>
          </div>

          <!-- Appointment Booking -->
          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-5">📅</div>

            <h3 class="text-2xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              {{ settingsStore.labels.appointmentBooking }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.appointmentBookingDesc }}
            </p>
          </div>

          <!-- Language Support -->
          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-5">🌍</div>

            <h3 class="text-2xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              {{ settingsStore.labels.multiLanguage }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.multiLanguageDesc }}
            </p>
          </div>

          <!-- Smart Search -->
          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-5">📍</div>

            <h3 class="text-2xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              {{ settingsStore.labels.locationSearch }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.locationSearchDesc }}
            </p>
          </div>

          <!-- Account Management -->
          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-5">👤</div>

            <h3 class="text-2xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              {{ settingsStore.labels.personalAccounts }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.personalAccountsDesc }}
            </p>
          </div>

          <!-- Secure Platform -->
          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-5">🔒</div>

            <h3 class="text-2xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              {{ settingsStore.labels.secureAccess }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.secureAccessDesc }}
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- HOW IT WORKS -->
    <section class="py-24 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center text-blue-700 mb-16"
        >
          How CareBridge Works
        </h2>

        <div class="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5"
            >
              1
            </div>

            <h3 class="text-2xl font-bold mb-3">
              Create Account
            </h3>

            <p class="text-gray-600">
              Register and access your personal healthcare dashboard.
            </p>
          </div>

          <div>
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5"
            >
              2
            </div>

            <h3 class="text-2xl font-bold mb-3">
              Find a Hospital
            </h3>

            <p class="text-gray-600">
              Search nearby hospitals using smart location technology.
            </p>
          </div>

          <div>
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5"
            >
              3
            </div>

            <h3 class="text-2xl font-bold mb-3">
              Book Appointment
            </h3>

            <p class="text-gray-600">
              Choose a hospital and schedule your appointment.
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class=" text-black py-24">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          Ready to Get Started?
        </h2>

        <p class="text-xl mb-8">
          Join CareBridge and access healthcare services more easily.
        </p>

        <router-link
          to="/register"
          class="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
        >
          Create Account
        </router-link>

      </div>

    </section>

  </div>
</template>