import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'
import './style/reset.css'


const app = createApp(App)
app.use(router)
app.mount('#app')
