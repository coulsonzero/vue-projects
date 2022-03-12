<template>
  <section class="container">
    <Box1 />
    <Box2 />
    <Box3 />
    <Box4 />
    <Box5 />
    <Box6 />
    <Box7 />
    <Box8 />
  </section>
</template>

<script>
import Box1 from '../components/Box1.vue';
import Box2 from '../components/Box2.vue';
import Box3 from '../components/Box3.vue';
import Box4 from '../components/Box4.vue';
import Box5 from '../components/Box5.vue';
import Box6 from '../components/Box6.vue';
import Box7 from '../components/Box7.vue';
import Box8 from '../components/Box8.vue';


export default {
  components: {
    Box1,
    Box2,
    Box3,
    Box4,
    Box5,
    Box6,
    Box7,
    Box8
  }
};
</script>

<style lang="scss">
.container {
  position: absolute;
  width: calc(100% - 4rem);
  top: 80px;
  margin: 0 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "i1 i2 i2 i2"
    "i3 i4 i4 i5"
    "i6 i7 i7 i8";
  gap: 2rem;

  .item {
    position: relative;
    padding: 10px;
    height: 27vh;
    color: #fff;
    text-align: center;
    .title {
      position: absolute;
      top: 1.2rem;
      left: 2rem;
      padding: 0.5rem 2rem;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.86);
      font-family: "STXinwei";
      text-shadow: 3px 3px 12px #00aeff, 3px -3px 12px #00aeff,
        -3px -3px 12px #00aeff, -3px 3px 12px #00aeff;
    }
  }


  .item:nth-child(1) {
    background: url(../assets/images/box.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i1;
  }
  .item:nth-child(2) {
    background: url(../assets/images/labelBg.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i2;
  }
  .item:nth-child(3) {
    background: url(../assets/images/box.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i3;
  }

  .item:nth-child(4) {
    background: url(../assets/images/bigBox.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i4;
  }

  .item:nth-child(5) {
    background: url(../assets/images/box.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i5;
  }

  .item:nth-child(6) {
    background: url(../assets/images/box.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i6;
  }

  .item:nth-child(7) {
    background: url(../assets/images/bigBox.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i7;
  }
  .item:nth-child(8) {
    background: url(../assets/images/box.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i8;
  }
}
</style>