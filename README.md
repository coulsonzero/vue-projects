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

**App.vue**

```vue
<script>
// 引用echarts
import {provide} from "vue"
import * as echarts from "echarts"

export default {
    setup() {
      provide("echarts", echarts)
    }
}
</script>
```

**Home.vue**

```vue
<script>
import {inject} from "vue"

export default {
    setup() {
      let $echarts = inject("echarts")
      console.log($echarts)
    }
}
</script>
```

**components/Box3.vue**

```vue
<script>
import { inject, onMounted } from "vue";

export default {
  data() {
    return {
      title: "应用数量排名",
    };
  },
  setup() {
    let $echarts = inject("echarts");
    // 钩子函数
    onMounted(() => {
      let myChart = $echarts.init(document.getElementById("chartBox3"));

      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      });
    });

    return {};
  },
};
</script>
```

## 5.安装lib-flexible

```sh
$ yarn add --save lib-flexible
```


## 6.express配置api接口
```sh
$ npm install express --save
```

```sh
$ mkdir serve

$ tree
.
├── index.js
├── package.json
└── router
    └── test.js
```
### 6.1 配置基础express的api接口
**index.js**

```js
var express = require("express");
var app = express();

app.get("/", (req, res) => {
 res.send("hello express");
});

app.listen(3000);
```

```sh
$ node index.js
```

### 6.2 配置express路由api接口
```js
const express = require("express");
const router = express.Router();

router.get("/data", function (req, res) {
 res.send({msg: "hello test"});
});

module.exports = router;

```

```js
const express = require("express");
const app = express();


/* ===== 1. http://localhost:3000/ ====== */
/*
app.get("/", (req, res) => {
 res.send("hello express");
});

app.listen(3000);
console.log("listen on http://localhost:3000")
*/

/* ======== 2，配置路由接口 ======= */
const Test = require("./router/test");
app.use("/test", Test);


app.listen(3080)
console.log("listen on http://localhost:3080/test/data")
```

```sh
$ cd serve
$ node index.js
```


### 6.3 引用json

**mock/test.json**
```json
{
    "chartData": {
        "day": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "seriesData": [
            [60, 280, 50, 193, 390, 330, 220],
            [120, 232, 101, 334, 290, 330, 320]
        ]
    }
}
```

**router/jsonTest.js**
```js
const express = require("express");
const router = express.Router();

// 引用json
let testData = require("../mock/test.json");

router.get("/data", function (req, res) {
    // 输出json
 res.send({msg: "hello test", chartData: testData});
});

module.exports = router;
```

**index.js**
```js
const express = require("express");
const app = express();

// cors解决跨域
/*
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, PUST, GET, DELECT, OPTIONS');
    next();
})
*/

/* ===== 1. http://localhost:3000/ ====== */
/*
app.get("/", (req, res) => {
 res.send("hello express");
});

app.listen(3000);
console.log("listen on http://localhost:3000")
*/

/* ======== 2，配置路由接口 ======= */
/*
const Test = require("./router/test");
app.use("/test", Test);

app.listen(3080)
console.log("listen on http://localhost:3080/test/data")
*/


/* ========== 3.配置json引用接口 ========= */
const Test = require("./router/jsonTest");
app.use("/jsonTest", Test);

app.listen(3080);
console.log("listen on http://localhost:3080/jsonTest/data");
```