<template>
  <div id="two-way-binding">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
  <!-- onChange -->
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue.js!",
    };
  },
};
</script>

<style scoped lang="scss">
input {
  outline: none;
  padding: 10px 5px;
  /* border-radius: 30px; */
  border: 1px solid rgba(32,32,32, .3);
  letter-spacing: 1px;
  width: 300px;
  transition: all .3s ease;
}
input:focus {
  border-color: #323232;
}
</style>
