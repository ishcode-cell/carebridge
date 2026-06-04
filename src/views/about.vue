```vue
<script setup>
import { useSettingsStore } from '@/stores/settings'

import {
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/vue/24/solid'

const settingsStore = useSettingsStore()
</script>

<template>
  <div
    class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950 text-white' : 'bg-white text-black'"
  >

    <!-- HERO -->
    <section class="relative h-[70vh] flex items-center justify-center">

      <img
        src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb"
        class="absolute inset-0 w-full h-full object-cover"
        alt="About CareBridge"
      >

      <div class="absolute inset-0 bg-blue-950/75"></div>

      <div class="relative z-10 text-center text-white px-6">

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          ABOUT CAREBRIDGE
        </h1>

        <p class="text-xl max-w-3xl mx-auto">
          Connecting patients and healthcare providers through technology.
        </p>

      </div>

    </section>

    <!-- OUR STORY -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
    >

      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
          class="rounded-3xl shadow-2xl"
          alt="Healthcare"
        >

        <div>

          <h2
            class="text-4xl font-bold mb-6"
            :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
          >
            OUR STORY
          </h2>

          <p
            class="text-lg leading-relaxed"
            :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
          >
            CareBridge was created to simplify healthcare access for everyone.
            Many patients struggle to find hospitals, book appointments,
            and obtain healthcare information quickly.

            Our platform bridges the gap between patients and healthcare
            providers through a modern digital experience that saves time,
            improves communication, and makes healthcare more accessible.
          </p>

        </div>

      </div>

    </section>

    <!-- MISSION & VISION -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
    >

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-2 gap-10">

          <!-- Mission -->
          <div
            class="p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >

            <LightBulbIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-3xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              OUR MISSION
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              To improve healthcare accessibility by helping patients
              discover hospitals, schedule appointments, and access
              healthcare services efficiently.
            </p>

          </div>

          <!-- Vision -->
          <div
            class="p-10 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >

            <RocketLaunchIcon
              class="w-16 h-16 mb-5"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3
              class="text-3xl font-bold mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              OUR VISION
            </h3>

            <p
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
            >
              To become a trusted healthcare platform connecting
              communities with quality healthcare services across
              Rwanda and beyond.
            </p>

          </div>

        </div>

      </div>

    </section>

    <!-- CORE VALUES -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'"
    >

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-16"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          CORE VALUES
        </h2>

        <div class="grid md:grid-cols-4 gap-8">

          <!-- Trust -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <ShieldCheckIcon
              class="w-14 h-14 mx-auto mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3 class="font-bold text-xl">
              TRUST
            </h3>

          </div>

          <!-- Innovation -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <SparklesIcon
              class="w-14 h-14 mx-auto mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3 class="font-bold text-xl">
              INNOVATION
            </h3>

          </div>

          <!-- Accessibility -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <GlobeAltIcon
              class="w-14 h-14 mx-auto mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3 class="font-bold text-xl">
              ACCESSIBILITY
            </h3>

          </div>

          <!-- Care -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition-all duration-300"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >

            <HeartIcon
              class="w-14 h-14 mx-auto mb-4"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'"
            />

            <h3 class="font-bold text-xl">
              CARE
            </h3>

          </div>

        </div>

      </div>

    </section>

    <!-- WHY WE EXIST -->
    <section
      class="py-24"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
    >

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2
          class="text-4xl font-bold mb-6"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          WHY WE EXIST
        </h2>

        <p
          class="text-lg leading-relaxed"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
        >
          Healthcare should be accessible, simple, and efficient.
          CareBridge exists to remove barriers between patients
          and healthcare providers by creating a platform that
          improves healthcare access and patient experience.
        </p>

      </div>

    </section>

    <!-- CTA -->
    <section class="py-24">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6">
          JOIN CAREBRIDGE TODAY
        </h2>

        <p
          class="text-xl mb-10"
          :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
        >
          Experience a smarter way to connect with healthcare services.
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
```
