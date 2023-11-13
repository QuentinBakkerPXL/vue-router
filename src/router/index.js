import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: []
})
export default router

import '../scss/main.scss'
import { createApp} from "vue"
import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(router);
app.mount('#app')