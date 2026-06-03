<script setup>
import { ref, computed, onMounted } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
const isReturning = ref(false)

const form = ref({
  name: '',
  age: '',
  phone: '',
  disease: '',
  hospital: '',
  doctor: '',
  date: '',
  time: ''
})

const doctors = [
  {
    name: 'Dr. Habimana',
    specialty: 'Cardiologist',
    hospital: 'King Faisal Hospital'
  },
  {
    name: 'Dr. Uwase',
    specialty: 'Cardiologist',
    hospital: 'CHUK'
  },
  {
    name: 'Dr. Mukamana',
    specialty: 'Pediatrician',
    hospital: 'CHUK'
  },
  {
    name: 'Dr. Niyonzima',
    specialty: 'General Practitioner',
    hospital: 'Rwanda Military Hospital'
  },
  {
    name: 'Dr. Ishimwe',
    specialty: 'Pulmonologist',
    hospital: 'King Faisal Hospital'
  },
  {
    name: 'Dr. Uwera',
    specialty: 'Dermatologist',
    hospital: 'Rwanda Military Hospital'
  },
  {
    name: 'Dr. Nkurunziza',
    specialty: 'Endocrinologist',
    hospital: 'King Faisal Hospital'
  }
]

const diseaseMap = {
  malaria: 'General Practitioner',
  flu: 'General Practitioner',
  fever: 'General Practitioner',
  asthma: 'Pulmonologist',
  diabetes: 'Endocrinologist',
  heart: 'Cardiologist',
  skin: 'Dermatologist',
  child: 'Pediatrician'
}

const availableDoctors = computed(() => {
  const specialty = diseaseMap[form.value.disease]

  if (!specialty) return []

  return doctors.filter(
    doctor => doctor.specialty === specialty
  )
})

onMounted(() => {
  const savedBooking = localStorage.getItem('carebridge-booking')

  if (savedBooking) {
    form.value = JSON.parse(savedBooking)
    isReturning.value = true
  }
})

const submitBooking = () => {
  localStorage.setItem(
    'carebridge-booking',
    JSON.stringify(form.value)
  )

  alert('Appointment booked successfully!')
}
</script>

<template>
  <div class="p-8 min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-900 text-slate-100' : 'bg-gray-50'">

    <!-- HEADER -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold transition-colors"
        :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
        Appointment Booking
      </h1>

      <p class="mt-2 transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
        {{
          isReturning
            ? 'Welcome back! Update your appointment details.'
            : 'Book your first appointment with CareBridge.'
        }}
      </p>
    </div>

    <!-- CARD -->
    <div class="rounded-3xl shadow-lg p-8 border-l-4 border-blue-600 transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

      <!-- PATIENT INFO -->
      <h2 class="text-xl font-bold mb-4 transition-colors"
        :class="settingsStore.isDark ? 'text-slate-100' : 'text-gray-800'">
        Patient Information
      </h2>

      <div class="grid md:grid-cols-2 gap-4">

        <input
          v-model="form.name"
          type="text"
          placeholder="Full Name"
          class="border rounded-xl p-3 transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <input
          v-model="form.age"
          type="number"
          placeholder="Age"
          class="border rounded-xl p-3 transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <input
          v-model="form.phone"
          type="text"
          placeholder="Phone Number"
          class="border rounded-xl p-3 transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
            : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
        />

        <select
          v-model="form.disease"
          class="border rounded-xl p-3 transition-colors"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 text-slate-100 border-slate-600' 
            : 'bg-white text-slate-950 border-gray-300'"
        >
          <option value="">
            Select Disease / Condition
          </option>

          <option value="malaria">Malaria</option>
          <option value="flu">Flu</option>
          <option value="fever">Fever</option>
          <option value="asthma">Asthma</option>
          <option value="diabetes">Diabetes</option>
          <option value="heart">Heart Problems</option>
          <option value="skin">Skin Problems</option>
          <option value="child">Child Healthcare</option>
        </select>

      </div>

      <!-- DOCTORS -->
      <div
        v-if="availableDoctors.length"
        class="mt-8"
      >

        <h2 class="text-xl font-bold mb-4 transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
          Recommended Doctors
        </h2>

        <div class="grid md:grid-cols-2 gap-4">

          <div
            v-for="doctor in availableDoctors"
            :key="doctor.name"
            class="border rounded-2xl p-4 hover:shadow-md transition cursor-pointer"
            :class="settingsStore.isDark 
              ? 'border-slate-600 hover:border-blue-400 text-slate-100' 
              : 'border-gray-300 hover:border-blue-500 text-slate-950'"
            @click="form.doctor = doctor.name"
          >
            <h3 class="font-bold text-lg">
              👨‍⚕️ {{ doctor.name }}
            </h3>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ doctor.specialty }}
            </p>

            <p class="transition-colors"
              :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'">
              🏥 {{ doctor.hospital }}
            </p>
          </div>

        </div>

      </div>

      <!-- APPOINTMENT -->
      <div class="mt-8">

        <h2 class="text-xl font-bold mb-4 transition-colors"
          :class="settingsStore.isDark ? 'text-slate-100' : 'text-gray-800'">
          Appointment Details
        </h2>

        <div class="grid md:grid-cols-2 gap-4">

          <select
            v-model="form.hospital"
            class="border rounded-xl p-3 transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600' 
              : 'bg-white text-slate-950 border-gray-300'"
          >
            <option value="">
              Select Hospital
            </option>

            <option>CHUK</option>
            <option>King Faisal Hospital</option>
            <option>Rwanda Military Hospital</option>
          </select>

          <input
            v-model="form.doctor"
            type="text"
            placeholder="Selected Doctor"
            class="border rounded-xl p-3 transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600 placeholder-slate-400' 
              : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
            readonly
          />

          <input
            v-model="form.date"
            type="date"
            class="border rounded-xl p-3 transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600' 
              : 'bg-white text-slate-950 border-gray-300'"
          />

          <input
            v-model="form.time"
            type="time"
            class="border rounded-xl p-3 transition-colors"
            :class="settingsStore.isDark 
              ? 'bg-slate-700 text-slate-100 border-slate-600' 
              : 'bg-white text-slate-950 border-gray-300'"
          />

        </div>

      </div>

      <!-- SUMMARY -->
      <div
        v-if="form.doctor"
        class="mt-8 border-l-4 border-blue-500 p-4 rounded-xl transition-colors"
        :class="settingsStore.isDark 
          ? 'bg-blue-900/30 text-slate-100' 
          : 'bg-blue-50'"
      >
        <h3 class="font-bold transition-colors"
          :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
          Booking Summary
        </h3>

        <p class="mt-2">
          Patient: <strong>{{ form.name }}</strong>
        </p>

        <p>
          Doctor: <strong>{{ form.doctor }}</strong>
        </p>

        <p>
          Hospital: <strong>{{ form.hospital }}</strong>
        </p>

      </div>

      <!-- BUTTON -->
      <button
        @click="submitBooking"
        class="mt-8 w-full py-4 rounded-xl font-bold text-lg transition"
        :class="settingsStore.isDark 
          ? 'bg-blue-700 hover:bg-blue-600 text-white' 
          : 'bg-blue-600 hover:bg-blue-700 text-white'"
      >
        {{
          isReturning
            ? 'Update Appointment'
            : 'Book Appointment'
        }}
      </button>

    </div>

  </div>
</template>