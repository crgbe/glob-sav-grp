import { createApp } from 'vue'
import router from '@/global/router'
import store from '@/global/store'
import App from './App.vue'

createApp(App)
	.use(router)
	.use(store)
	.mount('#app')
