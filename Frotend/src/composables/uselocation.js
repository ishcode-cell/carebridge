import { ref } from 'vue'

export function useLocation() {
  const latitude = ref(null)
  const longitude = ref(null)
  const error = ref(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      error.value = 'Geolocation not supported'
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        latitude.value = position.coords.latitude
        longitude.value = position.coords.longitude
      },
      (err) => {
        error.value = err.message
      }
    )
  }

  return {
    latitude,
    longitude,
    error,
    getLocation
  }
}