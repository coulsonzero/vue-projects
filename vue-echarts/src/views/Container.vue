<template>
<div class="container">
    <div class="item" v-for="(item, index) in boxes" :key="index">
        <img :src="url + item.img" />
        <div class="box-title">{{item.title}}</div>
        <components :is="boxes.component" v-if="boxes.component == nowComponent"></components>
    </div>
</div>
</template>

<script>
import Box1 from "../components/Box1.vue";
import Box2 from "../components/Box2.vue";
import Box3 from "../components/Box3.vue";
import Box4 from "../components/Box4.vue";
import Box5 from "../components/Box5.vue";
import Box6 from "../components/Box6.vue";
import Box7 from "../components/Box7.vue";
import Box8 from "../components/Box8.vue";


export default {
    data() {
        return {
            url: '../assets/images/',
            styleObject: {
                background: 'url(../assets/images/box.png) no-repeat',
                backgrundSize: '100% 100%'
            },
            boxes: [
                {id: 1, title: "今日在线用户量", component: 'Box1', img: 'box.png'},
                {id: 2, title: "平台运行统计", component: 'Box2', img: 'labelBg.png'},
                {id: 3, title: "应用数量排名", component: 'Box3', img: 'box.png'},
                {id: 4, title: "平台访问量", component: 'Box4', img: 'bigBox.png'},
                {id: 5, title: "成交类型分布情况", component: 'Box5', img: 'box.png'},
                {id: 6, title: "应用数量排名2", component: 'Box6', img: 'box.png'},
                {id: 7, title: "平台成交量", component: 'Box7', img: 'bigBox.png'},
                {id: 8, title: "订阅类型分布情况", component: 'Box8', img: 'box.png'}
            ]
        }
    },
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
}
</script>

<style lang="scss">
.container {
    position: absolute;
    width: 97%;
    top: 80px;
    margin: 0 2rem 4rem 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
        "i1 i2 i2 i2"
        "i3 i4 i4 i5"
        "i6 i7 i7 i8"
    ;
    gap: 3rem 1rem;

  .item {
    position: relative;
    padding: 10px;
    height: 27vh;
    color: #fff;
    text-align: center;
  }
  /*
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
  */
}
</style>