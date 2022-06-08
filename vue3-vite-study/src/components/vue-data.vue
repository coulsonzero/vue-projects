<template>
  <div>{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
};
</script>

<style>
</style>
