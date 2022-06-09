<template>
  <div id="list-rendering">
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["JavaScript", "Vue", "React"],
    };
  },
};
</script>

<style>
</style>
