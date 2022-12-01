import { createRouter, createWebHashHistory } from "vue-router";
import Home from '@/views/Home'
import Voucher from '@/views/Voucher'

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/voucher', name: 'voucher', component: Voucher },
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router