import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme: {
        dark: false,
        colors: {
          primary: '#d1dcde',
          secondary: '#FFFFFF',
          accent: '#04323a',
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-variant': '#d1dcde',
          'on-primary': '#04323a',
          'on-secondary': '#04323a',
          'on-accent': '#FFFFFF',
          'on-background': '#04323a',
          'on-surface': '#04323a',
        }
      }
    }
  }
})

createApp(App)
  .use(vuetify)
  .mount('#app')
