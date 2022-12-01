import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home'
import Voucher from '@/views/Voucher'
import VoucherCreate from "@/views/VoucherCreate";
import VoucherEdit from "@/views/VoucherEdit";
import VoucherShow from "@/views/VoucherShow";

const routes = [
	{ path: '/', name: 'home', component: Home },
	{ path: '/vouchers', name: 'vouchers_index', component: Voucher },
	{ path: '/vouchers/create', name: 'vouchers_create', component: VoucherCreate },
	{ path: '/vouchers/edit/:id', name: 'vouchers_edit', component: VoucherEdit },
	{ path: '/vouchers/show/:id', name: 'vouchers_show', component: VoucherShow }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router