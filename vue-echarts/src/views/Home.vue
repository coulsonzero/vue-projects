<template>
    <div class="home">
        <Header />
        <Container />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Container from './Container.vue'
// 依赖全局引用
import {inject} from "vue"
export default {
    components: {
        Header,
        Container
    },
    // 引用依赖
    setup() {
      let $echarts = inject("echarts")
      let $http = inject("axios")
      console.log($echarts)
      console.log($http)
    }
}
</script>

<style lang="scss">
.home {
  background: url("../assets/images/bg.png") no-repeat top center;
//   width: 100%;
  min-height: 100vh;
}
</style>