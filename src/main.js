import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

import { pt_BR } from './locales/pt_BR.js'
import { es } from './locales/es.js' 
import { en } from './locales/en.js' 


const messages = {
  pt_BR,
  en,
  es,
}

const i18n = createI18n({
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: messages
})
createApp(App).use(i18n).mount('#app')
