<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const settingsStore = useSettingsStore()

const form = ref({
  fullname: '',
  email: '',
  phone: '',
  age: '',
  people: 1,
  disease: '',
  password: '',
  confirmPassword: ''
})

const register = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match')
    return
  }

  // fake auth (replace later with backend)
  localStorage.setItem('token', 'carebridge-user')

  router.push('/dashboard')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-4 py-10 transition-colors duration-500"
    :class="settingsStore.isDark 
      ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' 
      : 'bg-gradient-to-br from-blue-100 via-white to-blue-200'">

    <div class="rounded-3xl shadow-2xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

      <!-- LEFT SIDE (IMAGE + INFO) -->
      <div class="relative hidden md:block">

        <img
          src="@/assets/images/register-hospital.jpg"
          alt="Hospital"
          class="w-full h-full object-cover"
        />

        <div class="absolute inset-0 bg-blue-900/70 flex flex-col justify-center items-center text-white p-10 text-center">

          <h1 class="text-5xl font-bold mb-6">
            Join CareBridge
          </h1>

          <p class="text-lg max-w-md">
            Create your account and start booking hospital appointments,
            finding nearby healthcare centers, and accessing medical services easily.
          </p>

          <div class="mt-8 space-y-2 text-left">
            <p>✔ Fast Hospital Booking</p>
            <p>✔ Location-Based Search</p>
            <p>✔ Multi-Language Support</p>
            <p>✔ Secure Healthcare Access</p>
          </div>

        </div>
      </div>

      <!-- RIGHT SIDE FORM -->
      <div class="p-10 overflow-y-auto max-h-screen transition-colors"
        :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold transition-colors"
            :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
            Create Account
          </h2>
          <p class="mt-2 transition-colors"
            :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
            Register to access CareBridge services
          </p>
        </div>

        <form @submit.prevent="register" class="space-y-5">

          <input
            v-model="form.fullname"
            type="text"
            placeholder="Full Name"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
              : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
            required
          />

          <input
            v-model="form.email"
            type="email"
            placeholder="Email Address"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
              : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
            required
          />

          <input
            v-model="form.phone"
            type="tel"
            placeholder="Phone Number"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
              : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
            required
          />

          <input
            v-model="form.age"
            type="number"
            placeholder="Age"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            v-model="form.people"
            type="number"
            min="1"
            placeholder="Number of People for Appointment"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <textarea
            v-model="form.disease"
            rows="3"
            placeholder="Disease / Reason for Appointment"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          ></textarea>

          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirm Password"
            class="w-full border p-4 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
          >
            Register
          </button>

          <p class="text-center text-gray-600">
            Already have an account?
            <router-link to="/login" class="text-blue-600 font-bold ml-1">
              Login
            </router-link>
          </p>

        </form>

      </div>

    </div>

  </div>
</template>