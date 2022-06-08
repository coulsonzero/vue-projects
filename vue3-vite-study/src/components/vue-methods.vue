<template>
  <div id="event-handling">
    <p>{{ message }}</p>
    <button @click="reverseMessage">反转 Message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style>
</style>
