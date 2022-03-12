<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
/* ==== 依赖注入 ==== */
// 引用echarts
import {provide} from "vue"
import * as echarts from "echarts"
// 引用axios
import axios from "axios"

export default {
    setup() {
      provide("echarts", echarts)
      provide("axios", axios)
    }
}
</script>

<style lang="scss">
@import url('https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}


</style>
