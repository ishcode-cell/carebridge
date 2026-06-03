<script setup>
import { ref, computed } from 'vue'
import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
const search = ref('')
const currentPage = ref(1)
const itemsPerPage = 10

const users = ref([
  { id: 1, name: 'Jean Claude', email: 'jean1@example.com', age: 28, phone: '+250 788 111 001', disease: 'Malaria' },
  { id: 2, name: 'Aline Mukamana', email: 'aline2@example.com', age: 34, phone: '+250 788 111 002', disease: 'Diabetes' },
  { id: 3, name: 'Eric Ndayisenga', email: 'eric3@example.com', age: 21, phone: '+250 788 111 003', disease: 'Flu' },
  { id: 4, name: 'Grace Uwase', email: 'grace4@example.com', age: 30, phone: '+250 788 111 004', disease: 'Asthma' },
  { id: 5, name: 'Patrick Habimana', email: 'patrick5@example.com', age: 45, phone: '+250 788 111 005', disease: 'Hypertension' },
  { id: 6, name: 'Sandrine Ishimwe', email: 'sandrine6@example.com', age: 26, phone: '+250 788 111 006', disease: 'Typhoid' },
  { id: 7, name: 'Daniel Nsengiyumva', email: 'daniel7@example.com', age: 39, phone: '+250 788 111 007', disease: 'Back Pain' },
  { id: 8, name: 'Chantal Uwera', email: 'chantal8@example.com', age: 32, phone: '+250 788 111 008', disease: 'Migraine' },
  { id: 9, name: 'Emmanuel Gatera', email: 'emmanuel9@example.com', age: 27, phone: '+250 788 111 009', disease: 'Malaria' },
  { id: 10, name: 'Beatrice Nyirahabimana', email: 'beatrice10@example.com', age: 41, phone: '+250 788 111 010', disease: 'Diabetes' },
  { id: 11, name: 'Kevin Nizeyimana', email: 'kevin11@example.com', age: 23, phone: '+250 788 111 011', disease: 'Flu' },
  { id: 12, name: 'Josiane Mukarutamu', email: 'josiane12@example.com', age: 36, phone: '+250 788 111 012', disease: 'Asthma' },
  { id: 13, name: 'Fabrice Hakizimana', email: 'fabrice13@example.com', age: 29, phone: '+250 788 111 013', disease: 'Ulcer' },
  { id: 14, name: 'Yvonne Uwitonze', email: 'yvonne14@example.com', age: 25, phone: '+250 788 111 014', disease: 'Headache' },
  { id: 15, name: 'Pascal Bizimana', email: 'pascal15@example.com', age: 50, phone: '+250 788 111 015', disease: 'Hypertension' },
  { id: 16, name: 'Noella Mukamwezi', email: 'noella16@example.com', age: 31, phone: '+250 788 111 016', disease: 'Malaria' },
  { id: 17, name: 'Ibrahim Nkurunziza', email: 'ibrahim17@example.com', age: 38, phone: '+250 788 111 017', disease: 'Diabetes' },
  { id: 18, name: 'Gloria Ishimwe', email: 'gloria18@example.com', age: 22, phone: '+250 788 111 018', disease: 'Flu' },
  { id: 19, name: 'Elie Maniraguha', email: 'elie19@example.com', age: 44, phone: '+250 788 111 019', disease: 'Back Pain' },
  { id: 20, name: 'Diane Nyiransabimana', email: 'diane20@example.com', age: 27, phone: '+250 788 111 020', disease: 'Asthma' }
])

const filteredUsers = computed(() => {
  return users.value.filter(u =>
    u.name.toLowerCase().includes(search.value.toLowerCase()) ||
    u.email.toLowerCase().includes(search.value.toLowerCase()) ||
    u.disease.toLowerCase().includes(search.value.toLowerCase())
  )
})

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredUsers.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / itemsPerPage)
})

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
  }
}

const deleteUser = (id) => {
  users.value = users.value.filter(u => u.id !== id)
  if (currentPage.value > totalPages.value && totalPages.value > 0) {
    currentPage.value = totalPages.value
  }
}
</script>

<template>
  <div class="p-8 min-h-screen transition-colors duration-500"
    :class="settingsStore.isDark ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-950'">

    <!-- HEADER -->
    <div class="mb-8">
      <h1 class="text-4xl font-bold transition-colors"
        :class="settingsStore.isDark ? 'text-blue-400' : 'text-blue-700'">
        Users Management
      </h1>

      <p class="transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'">
        Manage all registered patients in CareBridge system
      </p>
    </div>

    <!-- SEARCH -->
    <div class="mb-6">
      <input
        v-model="search"
        type="text"
        placeholder="Search users..."
        class="w-full md:w-1/2 p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-colors"
        :class="settingsStore.isDark 
          ? 'bg-slate-800 text-slate-100 border-slate-700 placeholder-slate-500' 
          : 'bg-white text-slate-950 border-gray-300 placeholder-gray-400'"
      />
    </div>

    <!-- TABLE -->
    <div class="rounded-2xl shadow overflow-hidden transition-colors"
      :class="settingsStore.isDark ? 'bg-slate-800' : 'bg-white'">

      <table class="w-full text-left">

        <thead class="bg-blue-600 text-white">
          <tr>
            <th class="p-4">Name</th>
            <th class="p-4">Email</th>
            <th class="p-4">Age</th>
            <th class="p-4">Phone</th>
            <th class="p-4">Disease</th>
            <th class="p-4">Action</th>
          </tr>
        </thead>

        <tbody>

          <tr
            v-for="user in paginatedUsers"
            :key="user.id"
            class="border-b transition-colors"
            :class="settingsStore.isDark 
              ? 'hover:bg-slate-700 border-slate-700' 
              : 'hover:bg-gray-50 border-gray-200'"
          >

            <td class="p-4 font-semibold">
              {{ user.name }}
            </td>

            <td class="p-4 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ user.email }}
            </td>

            <td class="p-4">
              {{ user.age }}
            </td>

            <td class="p-4 transition-colors"
              :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
              {{ user.phone }}
            </td>

            <td class="p-4">
              <span class="px-3 py-1 rounded-full text-sm font-medium transition-colors"
                :class="settingsStore.isDark 
                  ? 'bg-red-900 text-red-200' 
                  : 'bg-red-100 text-red-600'">
                {{ user.disease }}
              </span>
            </td>

            <td class="p-4">
              <button
                @click="deleteUser(user.id)"
                class="px-4 py-2 rounded-lg transition-colors font-medium"
                :class="settingsStore.isDark 
                  ? 'bg-red-900 hover:bg-red-800 text-red-100' 
                  : 'bg-red-500 hover:bg-red-600 text-white'"
              >
                Delete
              </button>
            </td>

          </tr>

        </tbody>

      </table>

      <!-- EMPTY STATE -->
      <div
        v-if="filteredUsers.length === 0"
        class="p-8 text-center transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-500'"
      >
        No users found
      </div>

    </div>

    <!-- PAGINATION -->
    <div v-if="totalPages > 1" class="mt-8 flex items-center justify-between flex-wrap gap-4">
      
      <!-- Info Text -->
      <div class="transition-colors"
        :class="settingsStore.isDark ? 'text-slate-400' : 'text-gray-600'">
        Showing {{ (currentPage - 1) * itemsPerPage + 1 }} to {{ Math.min(currentPage * itemsPerPage, filteredUsers.length) }} of {{ filteredUsers.length }} users
      </div>

      <!-- Pagination Controls -->
      <div class="flex items-center gap-2">
        
        <!-- Previous Button -->
        <button
          @click="goToPage(currentPage - 1)"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 hover:bg-slate-600 text-slate-100 disabled:hover:bg-slate-700' 
            : 'bg-gray-200 hover:bg-gray-300 text-slate-950 disabled:hover:bg-gray-200'"
        >
          ← Prev
        </button>

        <!-- Page Numbers -->
        <div class="flex items-center gap-1">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            class="px-3 py-2 rounded-lg transition-colors font-medium"
            :class="currentPage === page
              ? 'bg-blue-600 text-white'
              : settingsStore.isDark
              ? 'bg-slate-700 hover:bg-slate-600 text-slate-100'
              : 'bg-gray-200 hover:bg-gray-300 text-slate-950'"
          >
            {{ page }}
          </button>
        </div>

        <!-- Next Button -->
        <button
          @click="goToPage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          :class="settingsStore.isDark 
            ? 'bg-slate-700 hover:bg-slate-600 text-slate-100 disabled:hover:bg-slate-700' 
            : 'bg-gray-200 hover:bg-gray-300 text-slate-950 disabled:hover:bg-gray-200'"
        >
          Next →
        </button>

      </div>

    </div>

  </div>
</template>