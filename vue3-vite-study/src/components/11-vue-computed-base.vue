<template>
  <div>
    <div>Counter: {{ this.count }}</div>
    <div>newCounter: {{ this.newCount }}</div>
    <button @click="this.handleClick">Click Me</button>
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
  },
  computed: {
    newCount() {
      return this.count * 3 + 1;
    },
  },
};
</script>

<style>
</style>