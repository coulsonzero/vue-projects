<template>
  <div>
    <div>我是Son组件</div>
    <div>Hello, {{ msg }}</div>
    <div>Hello, {{ str }}</div>
    <div>{{ arr }}</div>
    <ol>
      <li v-for="item in obj" :key="item.id">
        {{ item.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Son",
  props: {
    msg: String,
    str: {
      type: String,
      default: "String Test",
    },
    arr: Array,
    obj: Object,
    func: {
      type: Function,
      required: false, //定义参数是否必须值
    },
  },
  created() {
    console.log(this.msg);
    this.func();
    this.$emit("func", "这是子传父的消息！");
  },
};
</script>

