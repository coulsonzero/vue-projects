<template>
  <div>Counter: {{ count }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  created() {
    this.count = 6;
  },
};
</script>

<style>
</style>
