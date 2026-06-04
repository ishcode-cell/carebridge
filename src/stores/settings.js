import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    // Theme
    theme: localStorage.getItem('theme') || 'Light',

    // Language
    language: localStorage.getItem('language') || 'English',

    languages: [
      'English',
      'French',
      'Kinyarwanda'
    ],

    // Notifications
    notifications: JSON.parse(
      localStorage.getItem('notifications') || 'true'
    ),

    // New Settings
    appointmentReminders: JSON.parse(
      localStorage.getItem('appointmentReminders') || 'true'
    ),

    smsAlerts: JSON.parse(
      localStorage.getItem('smsAlerts') || 'true'
    ),

    publicProfile: JSON.parse(
      localStorage.getItem('publicProfile') || 'false'
    ),

    shareLocation: JSON.parse(
      localStorage.getItem('shareLocation') || 'true'
    ),

    medicalRecommendations: JSON.parse(
      localStorage.getItem('medicalRecommendations') || 'true'
    ),

    twoFactorAuth: JSON.parse(
      localStorage.getItem('twoFactorAuth') || 'false'
    )
  }),

  getters: {
    isDark: (state) => state.theme === 'Dark'
  },

  actions: {
    setTheme(theme) {
      this.theme = theme
      localStorage.setItem('theme', theme)
    },

    setLanguage(language) {
      this.language = language
      localStorage.setItem('language', language)
    },

    setNotifications(value) {
      this.notifications = value
      localStorage.setItem(
        'notifications',
        JSON.stringify(value)
      )
    },

    setAppointmentReminders(value) {
      this.appointmentReminders = value
      localStorage.setItem(
        'appointmentReminders',
        JSON.stringify(value)
      )
    },

    setSmsAlerts(value) {
      this.smsAlerts = value
      localStorage.setItem(
        'smsAlerts',
        JSON.stringify(value)
      )
    },

    setPublicProfile(value) {
      this.publicProfile = value
      localStorage.setItem(
        'publicProfile',
        JSON.stringify(value)
      )
    },

    setShareLocation(value) {
      this.shareLocation = value
      localStorage.setItem(
        'shareLocation',
        JSON.stringify(value)
      )
    },

    setMedicalRecommendations(value) {
      this.medicalRecommendations = value
      localStorage.setItem(
        'medicalRecommendations',
        JSON.stringify(value)
      )
    },

    setTwoFactorAuth(value) {
      this.twoFactorAuth = value
      localStorage.setItem(
        'twoFactorAuth',
        JSON.stringify(value)
      )
    }
  }
})