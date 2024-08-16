import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'
import useFloating from "@floating-ui/vue";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createApp(App).use(router).mount('#app')
App.use(PortalVue)