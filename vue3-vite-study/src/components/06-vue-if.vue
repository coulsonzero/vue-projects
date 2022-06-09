<template>
  <div id="conditional-rendering">
    <span v-if="seen">现在你看到我了</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
    };
  },
};
</script>

<style>
</style>
