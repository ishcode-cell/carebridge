<script setup>
import { ref, onMounted } from 'vue'
import L from 'leaflet'
import { useSettingsStore } from '@/stores/settings'
import 'leaflet/dist/leaflet.css'

const settingsStore = useSettingsStore()
const map = ref(null)
const selected = ref(null)
const hospitals = ref([])

// Kigali reference hospital coordinates (real-world approx)
const baseHospitals = [
  {
    name: "CHUK Hospital",
    lat: -1.9441,
    lng: 30.0619
  },
  {
    name: "King Faisal Hospital",
    lat: -1.9550,
    lng: 30.1040
  },
  {
    name: "Rwanda Military Hospital",
    lat: -1.9600,
    lng: 30.0700
  }
]

// distance formula (Haversine)
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return (R * c).toFixed(2)
}

const updateHospitals = (lat, lng) => {
  hospitals.value = baseHospitals.map(h => {
    const distance = getDistance(lat, lng, h.lat, h.lng)

    return {
      ...h,
      distance: Number(distance)
    }
  }).sort((a, b) => a.distance - b.distance)
}

const initMap = () => {
  map.value = L.map('map').setView([-1.9441, 30.0619], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(map.value)

  map.value.on('click', (e) => {
    const { lat, lng } = e.latlng

    selected.value = `${lat.toFixed(4)}, ${lng.toFixed(4)}`

    // clear previous markers
    map.value.eachLayer(layer => {
      if (layer instanceof L.Marker) {
        map.value.removeLayer(layer)
      }
    })

    // user marker
    L.marker([lat, lng])
      .addTo(map.value)
      .bindPopup("Your Selected Location")
      .openPopup()

    // radius circle
    L.circle([lat, lng], {
      radius: 3000,
      color: 'blue',
      fillOpacity: 0.1
    }).addTo(map.value)

    updateHospitals(lat, lng)
  })
}

onMounted(() => {
  initMap()
})
</script>

<template>
  <div class="p-8 min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-900 text-slate-100' : 'bg-white'">

    <!-- TITLE -->
    <div class="mb-6">
      <h1 class="text-4xl font-bold transition-colors"
        :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
        Smart Hospital Locator
      </h1>

      <p class="transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
        Click anywhere on the map to calculate nearest hospitals
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">

      <!-- MAP -->
      <div
        id="map"
        class="h-[520px] rounded-2xl shadow border transition-colors"
        :class="settingsStore.isDark ? 'border-slate-700' : 'border-gray-300'"
      ></div>

      <!-- SIDE PANEL -->
      <div class="space-y-4">

        <!-- SELECTED LOCATION -->
        <div class="p-6 rounded-2xl shadow border-l-4 border-blue-600 transition-colors"
          :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

          <h2 class="text-xl font-bold mb-2 transition-colors"
            :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
            Selected Location
          </h2>

          <p class="transition-colors"
            :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
            {{ selected || "Click on map to select location" }}
          </p>

        </div>

        <!-- HOSPITALS -->
        <div class="p-6 rounded-2xl shadow border-l-4 border-green-500 transition-colors"
          :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

          <h2 class="text-xl font-bold mb-4 transition-colors"
            :class="settingsStore.isDark ? 'text-green-400' : 'text-green-600'">
            Nearby Hospitals (Auto Sorted)
          </h2>

          <ul class="space-y-3">

            <li
              v-for="(h, i) in hospitals"
              :key="i"
              class="p-3 rounded-xl transition-colors"
              :class="settingsStore.isDark 
                ? 'bg-slate-700 text-slate-100' 
                : 'bg-gray-50'"
            >

              <div class="flex justify-between">

                <b>🏥 {{ h.name }}</b>

                <span class="font-bold transition-colors"
                  :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-600'">
                  {{ h.distance }} km
                </span>

              </div>

            </li>

          </ul>

        </div>

      </div>

    </div>

  </div>
</template>