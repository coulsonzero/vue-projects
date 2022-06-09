<template>
  <div>
    <div>Father</div>
    <Son
      :msg="this.message"
      :str="this.title"
      :arr="this.nums"
      :obj="this.obj"
      :func="this.hello"
      @func="speak"
    />
  </div>
</template>

<script>
import Son from "@/components/08-vue-props-son.vue";

export default {
  name: "Father",
  data: () => ({
    message: "Vue",
    title: "Ftpopa",
    nums: [1, 3, 7, 9],
    obj: [
      { id: 0, text: "Learn JavaScript" },
      { id: 1, text: "Learn Vue" },
      { id: 2, text: "Build something awesome" },
    ],
  }),
  methods: {
    hello() {
      console.log("这是父传子的函数");
    },
    speak(msg) {
      console.log(msg);
    },
  },
  components: {
    Son,
  },
};
</script>

<style>
</style>