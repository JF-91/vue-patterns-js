import { createApp } from 'vue'
import './style.css'
import router from './rotuer'
import App from './App.vue'
import { plugin, defaultConfig } from "@formkit/vue";
import formKitConfig from './formkit.config'


createApp(App)
    .use(router)
    .use(plugin, defaultConfig(formKitConfig))
    .mount('#app')
