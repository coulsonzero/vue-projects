import { createRouter, createWebHistory } from 'vue-router';

// 1. 定义路由组件
import Home from '../views/Home.vue'

// 2. 定义一些路由, 每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/home',
        component: Home
    },
    // 重定向
    {
        path: '/',
        redirect: '/home'
    }
];


// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router