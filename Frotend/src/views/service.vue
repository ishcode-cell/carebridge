<script setup>
import { useSettingsStore } from '@/stores/settings'

import {
  BuildingOffice2Icon,
  CalendarDaysIcon,
  GlobeAltIcon,
  MapPinIcon,
  UserCircleIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/solid'

const settingsStore = useSettingsStore()
</script>

<template>
  <div
    class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950 text-white' : 'bg-white text-black'"
  >

    <!-- HERO -->
    <section
      class="relative h-[70vh] flex items-center justify-center"
    >
      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
        alt="Healthcare Services"
        class="absolute inset-0 w-full h-full object-cover"
      >

      <div class="absolute inset-0 bg-blue-950/75"></div>

      <div class="relative z-10 text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          OUR SERVICES
        </h1>

        <p class="text-xl max-w-3xl mx-auto">
          CareBridge helps patients find hospitals, book appointments,
          manage healthcare records, and access medical services easily.
        </p>
      </div>
    </section>

    <!-- SERVICES -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
    >
      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-16"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          WHAT WE OFFER
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Hospital Finder -->
          <div
            class="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <BuildingOffice2Icon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              Hospital Finder
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Find nearby hospitals based on your current location and get
              directions instantly.
            </p>
          </div>

          <!-- Appointment Booking -->
          <div
            class="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <CalendarDaysIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              Appointment Booking
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Schedule appointments with doctors and specialists without
              waiting in long queues.
            </p>
          </div>

          <!-- Multi Language -->
          <div
            class="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <GlobeAltIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              Multi-Language Support
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Use CareBridge in English, French, Kinyarwanda and many other
              languages.
            </p>
          </div>

          <!-- Location -->
          <div
            class="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <MapPinIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              Smart Location Search
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Locate healthcare facilities near your area using GPS and maps.
            </p>
          </div>

          <!-- Accounts -->
          <div
            class="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <UserCircleIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              Personal Accounts
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Manage appointments, profile information, and healthcare
              history in one place.
            </p>
          </div>

          <!-- Security -->
          <div
            class="rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <ShieldCheckIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              Secure Access
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Your medical information is protected with modern security
              standards.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
    >
      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-4xl font-bold text-center text-blue-700 mb-16">
          HOW CAREBRIDGE WORKS
        </h2>

        <div class="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5"
            >
              1
            </div>

            <h3 class="text-2xl font-bold mb-3">
              CREATE ACCOUNT
            </h3>

            <p class="text-gray-600">
              Register and access your healthcare dashboard.
            </p>
          </div>

          <div>
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5"
            >
              2
            </div>

            <h3 class="text-2xl font-bold mb-3">
              FIND HOSPITAL
            </h3>

            <p class="text-gray-600">
              Search hospitals near your location.
            </p>
          </div>

          <div>
            <div
              class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-5"
            >
              3
            </div>

            <h3 class="text-2xl font-bold mb-3">
              BOOK APPOINTMENT
            </h3>

            <p class="text-gray-600">
              Choose a doctor and schedule your visit.
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          READY TO GET STARTED?
        </h2>

        <p class="text-xl mb-8">
          Join CareBridge and access healthcare services more easily.
        </p>

        <router-link
          to="/register"
          class="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition"
        >
          CREATE ACCOUNT
        </router-link>

      </div>
    </section>

  </div>
</template>