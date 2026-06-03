<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useSettingsStore } from '@/stores/settings'

import hero1 from '@/assets/images/hero1.jpg'
import hero2 from '@/assets/images/hero2.jpg'
import hero3 from '@/assets/images/hero3.jpg'

const settingsStore = useSettingsStore()

const slides = [
  {
    image: hero1,
    title: 'Find Hospitals Near You',
    subtitle: 'Access healthcare services quickly and conveniently.'
  },
  {
    image: hero2,
    title: 'Book Appointments Online',
    subtitle: 'Save time and connect with healthcare providers.'
  },
  {
    image: hero3,
    title: 'Welcome to CareBridge',
    subtitle: 'Your bridge to better healthcare.'
  }
]

const currentSlide = ref(0)

let interval

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  interval = setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-white'">

    <!-- HERO -->
    <section class="relative h-screen overflow-hidden">

      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute inset-0 transition-all duration-1000"
        :class="currentSlide === index ? 'opacity-100' : 'opacity-0'"
      >
        <img
          :src="slide.image"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-blue-950/60"></div>

        <div
          class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6"
        >
          <h1
            class="text-5xl md:text-7xl font-bold mb-6"
          >
            {{ slide.title }}
          </h1>

          <p
            class="text-xl md:text-2xl max-w-3xl mb-8"
          >
            {{ slide.subtitle }}
          </p>

          <div class="flex gap-4 flex-wrap justify-center">

            <router-link
              to="/login"
              class="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl font-bold transition"
            >
              Get Started
            </router-link>

            <router-link
              to="/register"
              class="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold"
            >
              Create Account
            </router-link>

          </div>

        </div>
      </div>

      <!-- LEFT -->
      <button
        @click="prevSlide"
        class="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur text-white w-12 h-12 rounded-full"
      >
        ❮
      </button>

      <!-- RIGHT -->
      <button
        @click="nextSlide"
        class="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur text-white w-12 h-12 rounded-full"
      >
        ❯
      </button>

      <!-- DOTS -->
      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3"
      >
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="currentSlide = index"
          class="w-3 h-3 rounded-full"
          :class="
            currentSlide === index
              ? 'bg-white'
              : 'bg-white/50'
          "
        />
      </div>

    </section>

    <!-- TRUST -->
    <section class="py-20 transition-colors duration-500"
      :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'">

      <div class="max-w-6xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-14 transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          Trusted Healthcare Platform
        </h2>

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >

          <div
            class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
          >
            <h3
              class="text-4xl font-bold transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              50+
            </h3>

            <p class="mt-2 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.hospitals }}
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
          >
            <h3
              class="text-4xl font-bold transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              10K+
            </h3>

            <p class="mt-2 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.users }}
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
          >
            <h3
              class="text-4xl font-bold transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              5K+
            </h3>

            <p class="mt-2 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ settingsStore.labels.appointments }}
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'"
          >
            <h3
              class="text-4xl font-bold transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
            >
              20+
            </h3>

            <p class="mt-2 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              Languages
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- BENEFITS -->
    <section class="py-20 transition-colors duration-500"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-gray-50'">

      <div class="max-w-7xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-14 transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          Why Patients Choose CareBridge
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div
            class="p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >
            <div class="text-5xl mb-4">
              📍
            </div>

            <h3 class="text-2xl font-bold mb-3 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Nearby Hospitals
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              Discover hospitals closest to your location.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >
            <div class="text-5xl mb-4">
              ⚡
            </div>

            <h3 class="text-2xl font-bold mb-3 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Quick Access
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              Connect with healthcare services faster.
            </p>
          </div>

          <div
            class="p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
            :class="settingsStore.isDark ? 'bg-slate-700' : 'bg-white'"
          >
            <div class="text-5xl mb-4">
              🌍
            </div>

            <h3 class="text-2xl font-bold mb-3 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Multi-Language
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              Available in multiple languages for everyone.
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- TESTIMONIALS -->
    <section class="py-20 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <div class="max-w-6xl mx-auto px-6">

        <h2
          class="text-4xl font-bold text-center mb-14 transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
        >
          Patient Experiences
        </h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              "CareBridge helped me locate a hospital within minutes."
            </p>

            <h4 class="font-bold mt-4 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Jean Claude
            </h4>
          </div>

          <div class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              "Booking appointments has never been easier."
            </p>

            <h4 class="font-bold mt-4 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Alice
            </h4>
          </div>

          <div class="p-8 rounded-3xl shadow transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">
            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              "Simple, fast and reliable healthcare access."
            </p>

            <h4 class="font-bold mt-4 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-100' : ''">
              Patrick
            </h4>
          </div>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class=" text-black py-24">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2
          class="text-5xl font-bold mb-6"
        >
          Start Your Healthcare Journey Today
        </h2>

        <p
          class="text-xl mb-8"
        >
          Create an account and access hospitals more easily.
        </p>

        <router-link
          to="/register"
          class="bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold"
        >
          Register Now
        </router-link>

      </div>

    </section>

  </div>
</template>