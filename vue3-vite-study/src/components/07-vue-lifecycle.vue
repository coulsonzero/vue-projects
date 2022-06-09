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
    this.$nextTick(function () {
      // 仅在整个视图都被渲染之后才会运行的代码
    })
  },
  // 每次更新时
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  update() {
    console.log("update");
    this.$nextTick(function () {
      // 仅在整个视图都被重新渲染完毕之后才会运行的代码
    })
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
