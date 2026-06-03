import { defineStore } from 'pinia'

const translations = {
  English: {
    home: 'HOME',
    about: 'ABOUT',
    services: 'SERVICES',
    contact: 'CONTACT',
    login: 'LOGIN',
    settings: 'Settings',
    language: 'Language',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    saveSettings: 'Save Settings',
    customize: 'Customize your CareBridge experience.',
    emailNotifications: 'Email Notifications',
    changePassword: 'Change Password',
    deleteAccount: 'Delete Account',
    selectTheme: 'Theme',
    notifications: 'Notifications',
    themeLabel: 'Current theme',
    enableDark: 'Enable dark mode'
  },
  French: {
    home: 'ACCUEIL',
    about: 'À PROPOS',
    services: 'SERVICES',
    contact: 'CONTACT',
    login: 'CONNEXION',
    settings: 'Paramètres',
    language: 'Langue',
    darkMode: 'Mode Sombre',
    lightMode: 'Mode Clair',
    saveSettings: 'Enregistrer',
    customize: 'Personnalisez votre expérience CareBridge.',
    emailNotifications: 'Notifications par e-mail',
    changePassword: 'Changer le mot de passe',
    deleteAccount: 'Supprimer le compte',
    selectTheme: 'Thème',
    notifications: 'Notifications',
    themeLabel: 'Thème actuel',
    enableDark: 'Activer le mode sombre'
  },
  Kinyarwanda: {
    home: 'URUGO',
    about: 'IBYEREKEYE',
    services: 'SERIVISI',
    contact: 'HITAMO',
    login: 'WINJIRA',
    settings: 'Imyirondoro',
    language: 'Ururimi',
    darkMode: 'Imikorere yijimye',
    lightMode: 'Imikorere yoroheje',
    saveSettings: 'Bika Impinduka',
    customize: 'Hindura uburyo bwa CareBridge wishakiye.',
    emailNotifications: 'Ubutumwa bw’ikoranabuhanga',
    changePassword: 'Hindura ijambo ry’ibanga',
    deleteAccount: 'Siba Konti',
    selectTheme: 'Insanganyamatsiko',
    notifications: 'Ibimenyeshamakuru',
    themeLabel: 'Insanganyamatsiko iriho',
    enableDark: 'Koresha uburyo bwijimye'
  }
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    theme: localStorage.getItem('theme') || 'Light',
    language: localStorage.getItem('language') || 'English',
    notifications: localStorage.getItem('notifications') === 'true',
    languages: ['English', 'French', 'Kinyarwanda'],
    translations
  }),

  getters: {
    labels: state => state.translations[state.language] || state.translations.English,
    isDark: state => state.theme === 'Dark'
  },

  actions: {
    setTheme(theme) {
      this.theme = theme
      localStorage.setItem('theme', theme)
      this.applyTheme()
    },

    toggleTheme() {
      this.setTheme(this.isDark ? 'Light' : 'Dark')
    },

    setLanguage(language) {
      if (!this.languages.includes(language)) {
        language = 'English'
      }
      this.language = language
      localStorage.setItem('language', language)
    },

    setNotifications(value) {
      this.notifications = value
      localStorage.setItem('notifications', value ? 'true' : 'false')
    },

    applyTheme() {
      if (typeof document === 'undefined') return
      const root = document.documentElement
      root.classList.toggle('theme-dark', this.isDark)
      root.classList.toggle('theme-light', !this.isDark)
    }
  }
})