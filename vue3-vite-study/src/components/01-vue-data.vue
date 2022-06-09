<template>
  <div>
    <div>Msg: {{ message }}</div>
    <div>Counter: {{ count }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
      count: 0,
    };
  },
  /*
  data: () => ({
    count: 0,
  })
  */
};
</script>

<style>
</style>
