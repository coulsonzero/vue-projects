import { createRouter, createWebHistory } from 'vue-router';

import Sidebar from "../components/Sidebar.vue"
import Hello from "../components/Hello.vue"

const routes = [
	{
		path: "/app",
		component: () => Sidebar
	},
    {
        path: '/hello',
        component: () => Hello
    },
    // 重定向
    {
        path: '/',
        redirect: '/app'
    }
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router