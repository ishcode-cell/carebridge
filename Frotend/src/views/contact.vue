<script setup>
import { useSettingsStore } from '@/stores/settings'

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/solid'

const settingsStore = useSettingsStore()
</script>

<template>
  <div
    class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950 text-white' : 'bg-white text-black'"
  >

    <!-- HERO -->
    <section class="relative h-[60vh] flex items-center justify-center">

      <img
        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Contact"
      >

      <div class="absolute inset-0 bg-blue-950/75"></div>

      <div class="relative z-10 text-center text-white px-6">

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          CONTACT US
        </h1>

        <p class="text-xl max-w-3xl mx-auto">
          Have questions, feedback, or need support? Our team is ready to help you.
        </p>

      </div>

    </section>

    <!-- CONTACT CARDS -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
    >

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Email -->
          <div
            class="rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <EnvelopeIcon
              class="w-16 h-16 mx-auto mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-3"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              EMAIL
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              carebridge@gmail.com
            </p>

          </div>

          <!-- Phone -->
          <div
            class="rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <PhoneIcon
              class="w-16 h-16 mx-auto mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-3"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              PHONE
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              +250 788 123 456
            </p>

          </div>

          <!-- Address -->
          <div
            class="rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <MapPinIcon
              class="w-16 h-16 mx-auto mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-2xl font-bold mb-3"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              LOCATION
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              Kigali, Rwanda
            </p>

          </div>

        </div>

      </div>

    </section>

    <!-- CONTACT FORM -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
    >

      <div class="max-w-5xl mx-auto px-6">

        <div
          class="rounded-3xl shadow-2xl p-10"
          :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
        >

          <div class="flex items-center justify-center gap-3 mb-10">

            <ChatBubbleLeftRightIcon
              class="w-10 h-10 text-blue-600"
            />

            <h2
              class="text-4xl font-bold"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              SEND A MESSAGE
            </h2>

          </div>

          <form class="space-y-6">

            <input
              type="text"
              placeholder="FULL NAME"
              class="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            >

            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              class="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            >

            <input
              type="text"
              placeholder="SUBJECT"
              class="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            >

            <textarea
              rows="6"
              placeholder="TYPE YOUR MESSAGE..."
              class="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section
      class="py-24 text-center"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
    >

      <div class="max-w-4xl mx-auto px-6">

        <h2 class="text-5xl font-bold mb-6">
          NEED HEALTHCARE ASSISTANCE?
        </h2>

        <p
          class="text-xl mb-10"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
        >
          Join CareBridge today and start booking appointments with ease.
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