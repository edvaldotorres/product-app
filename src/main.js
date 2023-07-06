import { createApp } from 'vue'
import '@/plugins/axios'
import router from './router'
import store from './store'
import App from '@/App.vue'
import "@/assets/styles/main.css"

createApp(App).use(store).use(router).mount('#app')