<template>
  <div>
    <div>Count: {{ this.count }}</div>
    <div>newCount: {{ this.newCount }}</div>
    <div>newCounter: {{ this.newCounter }}</div>
    <button @click="this.handleClick">Click Me</button>
    <button @click="this.handleInit">Init Count</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 1,
  }),
  methods: {
    handleClick() {
      this.count++;
    },
    handleInit() {
      this.newCounter = 5;
    },
  },
  computed: {
    // 仅读取
    newCount() {
      return this.count * 3 + 1;
    },
    // 读取和设置
    newCounter: {
      get() {
        return this.count * 3 + 2;
      },
      set(v) {
        this.count = v;
      },
    },
  },
};
</script>

<style>
</style>