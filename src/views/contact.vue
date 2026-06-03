<script setup>
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<template>
  <div class="transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-950' : 'bg-white'">

    <!-- HERO -->
    <section class="relative h-[60vh] flex items-center justify-center transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <img
        src="@/assets/images/contact-hero.jpg"
        class="absolute inset-0 w-full h-full object-cover"
        alt="Contact"
      >

      <div class="absolute inset-0 bg-blue-950/70"></div>

      <div class="relative text-center text-white px-6">

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          {{ settingsStore.labels.contact }}
        </h1>

        <p class="text-xl max-w-3xl mx-auto">
          Have questions or need assistance? We're here to help.
        </p>

      </div>

    </section>

    <!-- CONTACT INFO -->
    <section class="py-20 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-900' : ''">

      <div class="max-w-7xl mx-auto px-6">

        <div class="grid md:grid-cols-3 gap-8">

          <!-- Email -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-4">📧</div>

            <h3 class="text-2xl font-bold mb-3 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              Email
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              carebridge@gmail.com
            </p>
          </div>

          <!-- Phone -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-4">📞</div>

            <h3 class="text-2xl font-bold mb-3 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              Phone
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              +250 78901234
            </p>
          </div>

          <!-- Location -->
          <div
            class="p-8 rounded-3xl shadow-xl text-center hover:-translate-y-2 transition transition-colors"
            :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
          >
            <div class="text-6xl mb-4">📍</div>

            <h3 class="text-2xl font-bold mb-3 transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
              Address
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              Kigali, Rwanda
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- CONTACT FORM -->
    <section class="py-24 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-blue-50'">

      <div class="max-w-4xl mx-auto px-6">

        <div class="p-10 rounded-3xl shadow-xl transition-colors"
          :class="settingsStore.isDark ? 'bg-slate-900' : 'bg-white'">

          <h2
            class="text-4xl font-bold text-center mb-10 transition-colors"
            :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'"
          >
            {{ settingsStore.labels.sendMessage }}
          </h2>

          <form class="space-y-6">

            <div>
              <label class="block mb-2 font-semibold transition-colors"
                :class="settingsStore.isDark ? 'text-slate-300' : ''">
                {{ settingsStore.labels.fullName }}
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                :class="settingsStore.isDark 
                  ? 'bg-slate-800 text-slate-100 border-slate-700 placeholder-slate-500' 
                  : 'border-gray-300 bg-white text-slate-950 placeholder-gray-400'"
              >
            </div>

            <div>
              <label class="block mb-2 font-semibold transition-colors"
                :class="settingsStore.isDark ? 'text-slate-300' : ''">
                {{ settingsStore.labels.email }}
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                :class="settingsStore.isDark 
                  ? 'bg-slate-800 text-slate-100 border-slate-700 placeholder-slate-500' 
                  : 'border-gray-300 bg-white text-slate-950 placeholder-gray-400'"
              >
            </div>

            <div>
              <label class="block mb-2 font-semibold transition-colors"
                :class="settingsStore.isDark ? 'text-slate-300' : ''">
                {{ settingsStore.labels.subject }}
              </label>

              <input
                type="text"
                placeholder="Message subject"
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                :class="settingsStore.isDark 
                  ? 'bg-slate-800 text-slate-100 border-slate-700 placeholder-slate-500' 
                  : 'border-gray-300 bg-white text-slate-950 placeholder-gray-400'"
              >
            </div>

            <div>
              <label class="block mb-2 font-semibold transition-colors"
                :class="settingsStore.isDark ? 'text-slate-300' : ''">
                {{ settingsStore.labels.message }}
              </label>

              <textarea
                rows="6"
                placeholder="Type your message..."
                class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                :class="settingsStore.isDark 
                  ? 'bg-slate-800 text-slate-100 border-slate-700 placeholder-slate-500' 
                  : 'border-gray-300 bg-white text-slate-950 placeholder-gray-400'"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-4 rounded-xl font-bold transition"
              :class="settingsStore.isDark 
                ? 'bg-blue-700 hover:bg-blue-600 text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-700'"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>

    <!-- CTA -->
    <section class="py-20 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800 text-slate-100' : 'bg-white text-black'">

      <div class="max-w-4xl mx-auto text-center px-6">

        <h2 class="text-5xl font-bold mb-6 transition-colors"
          :class="settingsStore.isDark ? 'text-slate-100' : ''">
          Need Healthcare Assistance?
        </h2>

        <p class="text-xl mb-8 transition-colors"
          :class="settingsStore.isDark ? 'text-slate-400' : ''">
          Create an account and start accessing healthcare services today.
        </p>

        <router-link
          to="/register"
          class="px-8 py-4 rounded-2xl font-bold transition"
          :class="settingsStore.isDark 
            ? 'bg-blue-700 text-white hover:bg-blue-600' 
            : 'bg-blue-700 text-white hover:bg-blue-800'"
        >
          Create Account
        </router-link>

      </div>

    </section>

  </div>
</template>