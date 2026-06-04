import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    isDark: false,
    language: 'EN',

    languages: ['EN', 'FR'],

    labels: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      login: 'Login',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode'
    }
  }),

  actions: {
    toggleTheme() {
      this.isDark = !this.isDark

      // THIS is the "missing thing" you were calling before
      this.applyTheme()
    },

    applyTheme() {
      document.documentElement.classList.toggle('dark', this.isDark)
    },

    setLanguage(lang) {
      this.language = lang
    }
  }
})