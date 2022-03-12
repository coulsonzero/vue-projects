<template>
  <div class="item i3">
    <div class="title">{{ title }}</div>
    <div class="chart bar" id="chartBox3"></div>
  </div>
</template>

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

<style>
.chart {
    position: relative;
    width: 100%;
    height: 100%;
    /* background:rgba(144, 173, 236, 0.86); */
}
</style>