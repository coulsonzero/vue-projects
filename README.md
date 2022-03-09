# Vite 快速构建 Vue3 项目

## 项目选型

vue3 + vite + yarn + vue-router + echarts + nodejs + scss

## yarn环境搭建

1. 安装nodejs

[Nodejs](https://nodejs.org/en/)


```sh
$ node -v
```
2.检查npm是否安装
```sh
$ npm -v
```
3.安装yarn
```sh
$ npm install -g yarn
```

## 1.构建vue项目

[Vite构建vue项目](https://v3.cn.vuejs.org/guide/installation.html#vite)

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

[Vue Router](https://router.vuejs.org/zh/guide/#javascript)

A. 导入vue-router
```sh
# yarn remove vue-router
$ yarn add vue-router@next -S
```

B.创建router路由
**`src/router/index.js`**
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

C.路由组件
**`App.vue`**
```vue
<template>
  <router-view />
</template>
```

D.挂载路由
**`main.js`**
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount("#app");
```

## 4.安装echarts

[Apache ECharts 5.3](https://echarts.apache.org/zh/index.html)

```sh
$ yarn add echarts
```

## 5.安装lib-flexible

```sh
$ yarn add --save lib-flexible
```

