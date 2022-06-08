<template>
  <div>
    <div>Counter: {{ count }}</div>
    <button @click="handleClick">Add</button>
  </div>
  <!--
    组件代码启动时：
      beforeCreate
      created
      beforeMount
      mounted

    组件按钮点击时：
      beforeUpdate

    组件代码更新后：
      beforeUnmount
      beforeCreate
      created
      beforeMount
      unmounted
      mounted
   -->
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  // DOM 加载完成时
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  // 每次更新时
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  update() {
    console.log("update");
  },
  // DOM 卸载之前
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style>
</style>
