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
  },
  {
    name: 'Dr. Mugisha',
    specialty: 'Neurologist',
    hospital: 'CHUK'
  },
  {
    name: 'Dr. Aline',
    specialty: 'Gynecologist',
    hospital: 'King Faisal Hospital'
  },
  {
    name: 'Dr. Bosco',
    specialty: 'Orthopedic',
    hospital: 'Rwanda Military Hospital'
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
  child: 'Pediatrician',
  brain: 'Neurologist',
  pregnancy: 'Gynecologist',
  bone: 'Orthopedic'
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
  <div
    class="p-8 min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark
      ? 'bg-slate-950 text-white'
      : 'bg-slate-100'"
  >

    <!-- HEADER -->
    <div class="mb-10">

      <h1
        class="text-4xl font-bold"
        :class="settingsStore.isDark
          ? 'text-blue-400'
          : 'text-blue-700'"
      >
        🏥 APPOINTMENT BOOKING
      </h1>

      <p
        class="mt-2"
        :class="settingsStore.isDark
          ? 'text-slate-400'
          : 'text-gray-500'"
      >
        {{
          isReturning
            ? 'Welcome back. Update your appointment details.'
            : 'Book your healthcare appointment quickly and easily.'
        }}
      </p>

    </div>

    <!-- MAIN CARD -->
    <div
      class="rounded-3xl p-8 shadow-xl border-l-8 border-blue-600"
      :class="settingsStore.isDark
        ? 'bg-slate-900'
        : 'bg-white'"
    >

      <!-- PATIENT INFORMATION -->
      <h2 class="text-2xl font-bold mb-6">
        👤 Patient Information
      </h2>

      <div class="grid md:grid-cols-2 gap-5">

        <input
          v-model="form.name"
          type="text"
          placeholder="Full Name"
          class="border rounded-xl p-4"
        />

        <input
          v-model="form.age"
          type="number"
          placeholder="Age"
          class="border rounded-xl p-4"
        />

        <input
          v-model="form.phone"
          type="text"
          placeholder="Phone Number"
          class="border rounded-xl p-4"
        />

        <select
          v-model="form.disease"
          class="border rounded-xl p-4"
        >
          <option value="">
            Select Disease
          </option>

          <option value="malaria">Malaria</option>
          <option value="flu">Flu</option>
          <option value="fever">Fever</option>
          <option value="asthma">Asthma</option>
          <option value="diabetes">Diabetes</option>
          <option value="heart">Heart Problems</option>
          <option value="skin">Skin Problems</option>
          <option value="child">Child Healthcare</option>
          <option value="brain">Neurological Issues</option>
          <option value="pregnancy">Pregnancy</option>
          <option value="bone">Bone Problems</option>
        </select>

      </div>

      <!-- DOCTORS -->
      <div
        v-if="availableDoctors.length"
        class="mt-10"
      >

        <h2
          class="text-2xl font-bold text-blue-600 mb-5"
        >
          👨‍⚕️ Recommended Doctors
        </h2>

        <div class="grid md:grid-cols-2 gap-4">

          <div
            v-for="doctor in availableDoctors"
            :key="doctor.name"
            @click="form.doctor = doctor.name"
            class="cursor-pointer border rounded-2xl p-5 hover:border-blue-600 hover:shadow-lg transition"
          >

            <h3 class="font-bold text-lg">
              👨‍⚕️ {{ doctor.name }}
            </h3>

            <p>
              {{ doctor.specialty }}
            </p>

            <p class="text-blue-600">
              🏥 {{ doctor.hospital }}
            </p>

          </div>

        </div>

      </div>

      <!-- APPOINTMENT DETAILS -->
      <div class="mt-10">

        <h2 class="text-2xl font-bold mb-6">
          📅 Appointment Details
        </h2>

        <div class="grid md:grid-cols-2 gap-5">

          <select
            v-model="form.hospital"
            class="border rounded-xl p-4"
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
            readonly
            placeholder="Selected Doctor"
            class="border rounded-xl p-4"
          />

          <input
            v-model="form.date"
            type="date"
            class="border rounded-xl p-4"
          />

          <input
            v-model="form.time"
            type="time"
            class="border rounded-xl p-4"
          />

        </div>

      </div>

      <!-- SUMMARY -->
      <div
        v-if="form.doctor"
        class="mt-10 bg-blue-50 border-l-4 border-blue-600 p-5 rounded-xl"
      >

        <h3 class="font-bold text-blue-700 mb-3">
          📋 Booking Summary
        </h3>

        <p>
          Patient:
          <strong>{{ form.name }}</strong>
        </p>

        <p>
          Doctor:
          <strong>{{ form.doctor }}</strong>
        </p>

        <p>
          Hospital:
          <strong>{{ form.hospital }}</strong>
        </p>

        <p>
          Date:
          <strong>{{ form.date }}</strong>
        </p>

        <p>
          Time:
          <strong>{{ form.time }}</strong>
        </p>

      </div>

      <!-- BUTTON -->
      <button
        @click="submitBooking"
        class="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition"
      >
        {{
          isReturning
            ? 'UPDATE APPOINTMENT'
            : 'BOOK APPOINTMENT'
        }}
      </button>

    </div>

  </div>
</template>