<template>
    <div class="home">
        <Header />
        <Container />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Container from './Container.vue'

export default {
    components: {
        Header,
        Container
    }
}
</script>

<style lang="scss">
.home {
  background: url("../assets/images/bg.png") no-repeat top center;
  width: 100%;
  min-height: 100vh;
}
</style>