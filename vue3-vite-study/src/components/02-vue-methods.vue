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
    // 不应该使用箭头函数来定义 method 函数 (例如 plus：() => this.a++)
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #323232;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background: #323232;
  color: #f8f8f8;
}
</style>
