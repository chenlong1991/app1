// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/styles/frame.scss'
import 'vue3-perfect-scrollbar/style.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import Scrollbar from './components/ScrollBar.vue'

const app = createApp(App)
app.use(
  createVuetify({
    icons: {
      defaultSet: 'mdi'
    }
  })
)
app.component('Scrollbar', Scrollbar)
app.use(router)
app.mount('#app')
