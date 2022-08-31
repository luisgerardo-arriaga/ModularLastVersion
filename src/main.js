import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Chartkick from 'chartkick'

import Chart from 'chart.js'



createApp(App).use(store).use(router).mount('#app')

