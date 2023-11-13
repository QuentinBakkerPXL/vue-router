import '../scss/main.scss'
import { createApp } from 'vue'
import { createRouter, createWebHistory} from "vue-router"
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
    history: createRouter(),
    routes: []
})

app.use(router);
app.mount('#app')
// createApp(App).mount('#app')
