export function getBrowserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject('Geolocation not supported')
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
      (error) => {
        reject(error.message)
      }
    )
  })
}

export function formatLocation(lat, lng) {
  return `Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`
}

export function saveLocation(location) {
  localStorage.setItem('user-location', location)
}

export function getSavedLocation() {
  return localStorage.getItem('user-location')
}