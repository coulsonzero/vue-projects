<template>
  <div>
    <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    <Test />
  </div>
</template>

<script>
import Test from "@/components/Test.vue";

export default {
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter((number) => number % 2 === 0);
    },
  },
};
</script>

<style>
</style>