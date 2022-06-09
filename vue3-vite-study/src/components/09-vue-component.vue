<template>
  <div>
    <div>{{ name }}</div>
    <Props msg="vue" />
    <lok msg="react"></lok>
  </div>
</template>

<script>
import Props from "@/components/08-vue-props.vue";

export default {
  data: () => ({
    name: "Test",
  }),
  components: {
    Props,
    lok: Props,
  },
};
</script>

<style>
</style>