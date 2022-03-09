# Vite 快速构建 Vue 项目


## 1.构建vue项目

Vite 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动 (秒开!!)

```sh
$ yarn create vite <project-name> --template vue
$ cd <project-name>
$ yarn
$ yarn dev
```

## 2.引入scss预处理器

```sh
$ npm install -D sass
```
```vue
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  &,
  &::before,
  &::after {
   box-sizing: border-box;
  }
}
</style>
```

## 3.使用vue-router

[Vue-Router](https://router.vuejs.org/zh/guide/#javascript)

A. 导入vue-router
```sh
# yarn remove vue-router
$ yarn add vue-router@next -S
```

B.创建router路由
**src/router/index.js**
```js
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
    history: createWebHistory(),
    routes
})

export default router
```

C.挂载路由
**main.js**
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount("#app");
```

## 4.安装echarts
```sh
$ yarn add echarts
```
