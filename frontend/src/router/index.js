import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home'
import Voucher from '@/views/Voucher'

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/voucher', name: 'voucher', component: Voucher },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router