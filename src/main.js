
import { createApp } from 'vue'
import App from '@/components/app/App.vue'
import ui from "./ui"
import "./index.css"

const app = createApp(App)
ui.map((c)=>{
    app.component(c.name,c)
})

app.mount('#app')
