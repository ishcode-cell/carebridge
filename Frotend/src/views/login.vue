<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const settingsStore = useSettingsStore()

const email = ref('')
const password = ref('')

const login = () => {
  localStorage.setItem('token', 'carebridge-user')
  router.push('/dashboard')
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500"
    :class="settingsStore.isDark 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-blue-100 via-white to-blue-200'"
  >
    <div
      class="rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'"
    >

      <!-- LEFT SIDE IMAGE -->
      <div class="relative hidden md:block">

        <img
          src="@/assets/images/login-doctor.jpg"
          alt="Doctor"
          class="w-full h-full object-cover"
        >

        <div
          class="absolute inset-0 bg-blue-900/60 flex flex-col justify-center items-center text-white p-10"
        >

          <h1 class="text-5xl font-bold mb-6">
            Welcome Back
          </h1>

          <p class="text-lg text-center max-w-md">
            Access your CareBridge dashboard, manage appointments,
            discover hospitals, and stay connected to healthcare services.
          </p>

        </div>

      </div>

      <!-- RIGHT SIDE FORM -->
      <div class="p-10 flex flex-col justify-center transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

        <div class="text-center mb-8">

          <h2 class="text-4xl font-bold transition-colors"
            :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
            Login
          </h2>

          <p class="mt-2 transition-colors"
            :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
            Sign in to your account
          </p>

        </div>

        <form
          @submit.prevent="login"
          class="space-y-6"
        >

          <div>
            <label class="block mb-2 font-semibold transition-colors"
              :class="settingsStore.isDark ? 'text-slate-300' : 'text-gray-700'">
              Email Address
            </label>

            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              :class="settingsStore.isDark 
                ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
                : 'border-gray-300 bg-white text-slate-950 placeholder-gray-400'"
              required
            >
          </div>

          <div>
            <label class="block mb-2 font-semibold transition-colors"
              :class="settingsStore.isDark ? 'text-slate-300' : 'text-gray-700'">
              Password
            </label>

            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              class="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              :class="settingsStore.isDark 
                ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
                : 'border-gray-300 bg-white text-slate-950 placeholder-gray-400'"
              required
            >
          </div>

          <div class="flex justify-between text-sm">

            <label class="flex items-center gap-2">
              <input type="checkbox">
              Remember me
            </label>

            <a
              href="#"
              class="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
          >
            Login
          </button>

          <div class="text-center text-gray-600">

            Don't have an account?

            <router-link
              to="/register"
              class="text-blue-600 font-bold ml-1"
            >
              Register
            </router-link>

          </div>

        </form>

      </div>

    </div>
  </div>
</template>