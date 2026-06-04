<script setup>
import { getHospitals } from '@/services/hospitalservice'
import HospitalCard from './hospitalCard.vue'

const hospitals = getHospitals()
</script>

<template>
  <div class="grid md:grid-cols-3 gap-6">
    <HospitalCard
      v-for="h in hospitals"
      :key="h.id"
      :hospital="h"
    />
  </div>
</template>