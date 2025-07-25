
import './styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSplide from '@splidejs/vue-splide';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueSplide)
app.use(createPinia())
app.use(router)

app.mount('#app')
