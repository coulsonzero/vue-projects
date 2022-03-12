<template>
  <div class="item i5">
    <div class="title">{{ title }}</div>
    <div class="chart pie1" id="chartBox5"></div>
    <div class="loading"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue";

export default {
  data() {
    return {
      title: "成交类型分布情况",
    };
  },
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");

    // 2.创建容器

    let data = reactive({});
    let xData = reactive([]);
    let seriesData = reactive([]);

    // 3.提取数据
    function setData() {
      // xData = data.data.chartData.chartData.map(v => v.day)
      // yData = data.data.chartData.chartData.map(v => v.seriesData);
      xData = data.data.chartData.chartData.day;
      seriesData = data.data.chartData.chartData.seriesData;

      console.log("xData", xData);
      console.log("seriesData", seriesData);
    }

    async function getState() {
      data = await $http({ url: "/one/data" });
      // 1.测试数据
      // console.log(data.data.chartData.chartData);
    }
    // 5.get请求完成后调用请求
    // getState()

    onMounted(() => {
      let myChart5 = $echarts.init(document.getElementById("chartBox5"));
      getState().then(() => {
        setData();

        myChart5.setOption({
          xAxis: {
            type: "category",
            data: xData,
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: seriesData,
              type: "bar",
            },
          ],
        });
      });
    });
    // 4.返回数据
    return {
      // getState
      getState,
      data,
      xData,
      seriesData,
      setData,
    };
  },
};
</script>

<style scoped>
#chartBox5 {
  position: relative;
  width: 100%;
}
</style>