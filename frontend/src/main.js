import { createApp } from 'vue'
import router from '@/global/router'
import store from '@/global/store'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
	.use(router)
	.use(store)
	.mount('#app')
