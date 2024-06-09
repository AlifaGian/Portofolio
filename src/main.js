import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import applyScrollEffects from './script.js';
import './assets/css/tailwind.css'

createApp(App).use(router).mount('#app')
applyScrollEffects();
