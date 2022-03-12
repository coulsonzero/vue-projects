<template>
  <div class="item i4">
    <div class="title">{{ title }}</div>
    <div class="chart line1" id="chartBox4"></div>
  </div>
</template>

<script>
import { inject, onMounted } from "vue";

export default {
  data() {
    return {
      title: "平台访问量",
    }
  },
  setup() {
    let $echarts = inject("echarts");
    // 1.axios
    let $http = inject("axios");
    // 2.api异步请求
    async function getState() {

      // 需要端口跨域
      // let boxData = await $http({ url: "http://localhost:8090/one/data" });

      // App.vue设置基准路径后
      let boxData = await $http({ url: "/one/data" });
      // console.log(boxData);
    }
    // 3.调用api请求信息
    getState()
    onMounted(() => {
      let myChart2 = $echarts.init(document.getElementById("chartBox4"));

      myChart2.setOption({
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
    // 4.返回
    return {
      getState
    };
  },
};
</script>

<style>
.chart {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>