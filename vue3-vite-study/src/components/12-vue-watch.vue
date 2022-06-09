<template>
  <div>
    <div>Count: {{ this.count }}</div>
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
  watch: {
    count(val, oldVal) {
      console.log(`new: ${val}, old: ${oldVal}`)
    }
  }
};
</script>

<style>
</style>