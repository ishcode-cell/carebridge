<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-white'">

    <!-- HERO -->
    <section
      class="relative h-[70vh] flex items-center justify-center transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''"
    >
      <img
        src="@/assets/images/about-hero.jpg"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-blue-950/70"></div>

      <div class="relative text-center text-white px-6">

        <h1
          class="text-5xl md:text-7xl font-bold mb-6"
        >
          {{ settingsStore.labels.aboutCareBridge }}
        </h1>

        <p
          class="text-xl max-w-3xl mx-auto"
        >
          {{ settingsStore.labels.connectingPatients }}
        </p>

      </div>

    </section>

    <!-- OUR STORY -->
    <section class="py-24 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <div
        class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
      >

        <img
          src="@/assets/images/about-story.jpg"
          class="rounded-3xl shadow-xl"
        />

        <div>

          <h2
            class="text-4xl font-bold mb-6 transition-colors"
            :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
          >
            {{ settingsStore.labels.ourStory }}
          </h2>

          <p
            class="text-lg leading-relaxed transition-colors"
            :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'"
          >
            CareBridge was created to make healthcare access easier
            for everyone. Many patients struggle to find hospitals,
            schedule appointments, and access healthcare information.
            Our platform bridges the gap between patients and healthcare
            providers through a simple and modern digital experience.
          </p>

        </div>

      </div>

    </section>

    <!-- MISSION & VISION -->
    <section class="py-24 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'">

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-2 gap-10">

          <div
            class="p-10 rounded-3xl shadow-lg transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >

            <div class="text-5xl mb-4">
              🎯
            </div>

            <h3
              class="text-3xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              {{ settingsStore.labels.ourMission }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              To improve healthcare accessibility by helping
              patients discover hospitals, schedule appointments,
              and access healthcare services efficiently.
            </p>

          </div>

          <div
            class="p-10 rounded-3xl shadow-lg transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >

            <div class="text-5xl mb-4">
              🚀
            </div>

            <h3
              class="text-3xl font-bold mb-4 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              {{ settingsStore.labels.ourVision }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              To become a trusted healthcare platform that
              connects communities with quality healthcare
              services across Rwanda and beyond.
            </p>

          </div>

        </div>

      </div>

    </section>

    <!-- VALUES -->
    <section class="py-24 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-14 transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          {{ settingsStore.labels.coreValues }}
        </h2>

        <div class="grid md:grid-cols-4 gap-8">

          <div
            class="p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-5xl mb-4">
              🤝
            </div>

            <h3 class="font-bold text-xl transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Trust
            </h3>
          </div>

          <div
            class="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition"
          >
            <div class="text-5xl mb-4">
              💡
            </div>

            <h3 class="font-bold text-xl">
              Innovation
            </h3>
          </div>

          <div
            class="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition"
          >
            <div class="text-5xl mb-4">
              🌍
            </div>

            <h3 class="font-bold text-xl">
              Accessibility
            </h3>
          </div>

          <div
            class="bg-white p-8 rounded-3xl shadow-lg text-center hover:-translate-y-2 transition"
          >
            <div class="text-5xl mb-4">
              ❤️
            </div>

            <h3 class="font-bold text-xl">
              Care
            </h3>
          </div>

        </div>

      </div>

    </section>

    <!-- WHY WE EXIST -->
    <section class="bg-gray-50 py-24">

      <div class="max-w-5xl mx-auto text-center px-6">

        <h2
          class="text-4xl font-bold text-blue-700 mb-6"
        >
          Why We Exist
        </h2>

        <p
          class="text-lg text-gray-600 leading-relaxed"
        >
          Healthcare should be accessible, simple, and efficient.
          CareBridge exists to remove barriers between patients
          and healthcare providers by creating a platform that
          improves healthcare access and patient experience.
        </p>

      </div>

    </section>

    <!-- CTA -->
    <section class=" text-black py-24">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2
          class="text-5xl font-bold mb-6"
        >
          Join CareBridge Today
        </h2>

        <p
          class="text-xl mb-8"
        >
          Experience a smarter way to connect with healthcare services.
        </p>

        <router-link
          to="/register"
          class="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold"
        >
          Create Account
        </router-link>

      </div>

    </section>

  </div>
</template>