import { createApp } from 'vue'
import './assets/styles.css'
import App from './App.vue'
import { TroisJSVuePlugin } from 'troisjs';


const app = createApp(App)
app.use(TroisJSVuePlugin);
app.mount('#app')
