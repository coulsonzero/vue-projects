<template>

</template>

<script>
import { onMounted,onUpdated,onUnmounted } from 'vue'

export default {
  name: '',
  // state
  data: () => ({}),
  // 方法
  methods: {},
  computed: {},
  watch: {},
  // 参数
  props: {},
  // 子组件
  components: {},
  // 在组件被创建之前，props 被解析之后执行
  setup(props) {
    console.log(props)
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
    return {} // 这里返回的任何内容都可以用于组件的其余部分
  },
  // 生命周期函数
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  update() {},
  beforeUnmount() {},
  unmounted() {},

}
</script>

<style scoped lang="scss">

</style>