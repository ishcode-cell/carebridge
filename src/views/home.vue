<script setup>
import { useSettingsStore } from '@/stores/settings'

import {
  HeartIcon,
  BuildingOffice2Icon,
  CalendarDaysIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon
} from '@heroicons/vue/24/solid'

const settingsStore = useSettingsStore()
</script>

<template>
  <div
    class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950 text-white' : 'bg-white text-black'"
  >

    <!-- HERO -->
    <section class="relative min-h-screen flex items-center justify-center">

      <img
        src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Healthcare"
      >

      <div class="absolute inset-0 bg-blue-950/75"></div>

      <div class="relative z-10 text-center px-6 text-white">

        <h1 class="text-6xl md:text-8xl font-extrabold mb-6">
          CAREBRIDGE
        </h1>

        <p class="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
          Connecting patients to hospitals, doctors and healthcare services
          faster, easier and smarter across Rwanda.
        </p>

        <div class="flex flex-col md:flex-row justify-center gap-5">

          <router-link
            to="/register"
            class="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition"
          >
            GET STARTED
          </router-link>

          <router-link
            to="/services"
            class="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition"
          >
            OUR SERVICES
          </router-link>

        </div>

      </div>

    </section>

    <!-- STATS -->
    <section
      class="py-16"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-blue-50'"
    >

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-4 gap-8">

          <div class="text-center">
            <h2 class="text-5xl font-bold text-blue-600">50+</h2>
            <p class="mt-2">Hospitals</p>
          </div>

          <div class="text-center">
            <h2 class="text-5xl font-bold text-blue-600">200+</h2>
            <p class="mt-2">Doctors</p>
          </div>

          <div class="text-center">
            <h2 class="text-5xl font-bold text-blue-600">10K+</h2>
            <p class="mt-2">Patients</p>
          </div>

          <div class="text-center">
            <h2 class="text-5xl font-bold text-blue-600">24/7</h2>
            <p class="mt-2">Healthcare Access</p>
          </div>

        </div>

      </div>

    </section>

    <!-- FEATURES -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-white'"
    >

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-5xl font-bold text-center mb-16"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          WHY CHOOSE CAREBRIDGE?
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all"
            :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
          >
            <BuildingOffice2Icon class="w-16 h-16 text-blue-600 mb-5" />
            <h3 class="text-2xl font-bold mb-4">Find Hospitals</h3>
            <p class="text-gray-500">
              Quickly locate nearby hospitals and healthcare centers.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all"
            :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
          >
            <CalendarDaysIcon class="w-16 h-16 text-blue-600 mb-5" />
            <h3 class="text-2xl font-bold mb-4">Book Appointments</h3>
            <p class="text-gray-500">
              Schedule appointments without standing in long queues.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all"
            :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
          >
            <MapPinIcon class="w-16 h-16 text-blue-600 mb-5" />
            <h3 class="text-2xl font-bold mb-4">Smart Location</h3>
            <p class="text-gray-500">
              Discover healthcare services near your current location.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all"
            :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
          >
            <ShieldCheckIcon class="w-16 h-16 text-blue-600 mb-5" />
            <h3 class="text-2xl font-bold mb-4">Secure Access</h3>
            <p class="text-gray-500">
              Your personal healthcare information remains protected.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all"
            :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
          >
            <UserGroupIcon class="w-16 h-16 text-blue-600 mb-5" />
            <h3 class="text-2xl font-bold mb-4">Patient Management</h3>
            <p class="text-gray-500">
              Manage appointments and healthcare records easily.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all"
            :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
          >
            <HeartIcon class="w-16 h-16 text-blue-600 mb-5" />
            <h3 class="text-2xl font-bold mb-4">Better Care</h3>
            <p class="text-gray-500">
              Improving healthcare access and patient experience.
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- HOW IT WORKS -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-blue-50'"
    >

      <div class="max-w-7xl mx-auto px-6">

        <h2 class="text-5xl font-bold text-center mb-16 text-blue-600">
          HOW IT WORKS
        </h2>

        <div class="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <div class="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-3xl font-bold mb-5">
              1
            </div>

            <h3 class="text-2xl font-bold mb-3">
              REGISTER
            </h3>

            <p>Create your CareBridge account.</p>
          </div>

          <div>
            <div class="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-3xl font-bold mb-5">
              2
            </div>

            <h3 class="text-2xl font-bold mb-3">
              FIND A HOSPITAL
            </h3>

            <p>Search hospitals near your location.</p>
          </div>

          <div>
            <div class="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-3xl font-bold mb-5">
              3
            </div>

            <h3 class="text-2xl font-bold mb-3">
              BOOK APPOINTMENT
            </h3>

            <p>Choose a doctor and reserve your visit.</p>
          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="py-24">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          YOUR HEALTHCARE JOURNEY STARTS HERE
        </h2>

        <p
          class="text-xl mb-10"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
        >
          Join thousands of patients already using CareBridge.
        </p>

        <router-link
          to="/register"
          class="bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-800 transition"
        >
          CREATE ACCOUNT
        </router-link>

      </div>

    </section>

  </div>
</template>