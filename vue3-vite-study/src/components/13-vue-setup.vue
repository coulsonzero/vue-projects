<template>
  <div>
    <div>Count: {{ this.count }}</div>
  </div>
</template>

<script>
import { onMounted,onUpdated,onUnmounted } from 'vue'

export default {
  data: () => ({
    count: 1,
  }),
  setup() {
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
    return {}; // 这里返回的任何内容都可以用于组件的其余部分
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  // DOM 加载完成时
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
    this.$nextTick(function () {
      // 仅在整个视图都被渲染之后才会运行的代码
    })
  },
  // 每次更新时
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  update() {
    console.log("update");
    this.$nextTick(function () {
      // 仅在整个视图都被重新渲染完毕之后才会运行的代码
    })
  },
  // DOM 卸载之前
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
</style>