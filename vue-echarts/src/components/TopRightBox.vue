<template>
  <p>{{title}}</p>
  <!-- :class   不可用index-->
  <div v-for="item in items" :key="item.id" :class="text + item.id">
    <div class='box'>
        <div class='labelName'>{{item.name}}</div>
        <div class="label">{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '平台运行统计',
      text: 'labelBox box',
      items: [
        { id: 1, name: '应用上架数', value: '50322'},
        { id: 2, name: '租户量',   value: '50322'},
        { id: 3, name: '服务商量', value: '50322'},
        { id: 4, name: '用户总量', value: '50322'},
        { id: 5, name: '总成交量', value: '50322'},
        { id: 6, name: '总订阅量', value: '50322'},
        { id: 7, name: '总访问量', value: '50322'},
        { id: 8, name: '应用总数', value: '50322'}
      ]
    }
  }
};
</script>

<style>

/* 标签背景 */
section.container .item .labelBox {
    position: absolute;
    width: 158px;
    height: 120px;
    top: 56%;
    left: 100px;
    transform: translate(-50%, -50%);
    background: url(../assets/images/laberBox.png) no-repeat;
}
section.container .item .labelBox:nth-child(2) {
    left: 274px;
}
section.container .item .labelBox:nth-child(3) {
    left: 448px;
}
section.container .item .labelBox:nth-child(4) {
    left: 622px;
}
section.container .item .labelBox:nth-child(5) {
    left: 796px;
}
section.container .item .labelBox:nth-child(6) {
    left: 970px;
}
section.container .item .labelBox:nth-child(7) {
    left: 1144px;
}
section.container .item .labelBox:nth-child(8) {
    left: 1318px;
}

/* 标签文字 */
section.container .item .labelBox .box {
    position: relative;
}
section.container .item .labelBox .box .labelName {
    position: absolute;
    left: 50%;
    top: 26px;
    width: 100%;
    transform: translate(-50%, -50%);
    /* text-align: center; */
    font-size: 18px;
    color:rgba(255, 255, 255, 0.6)
}
section.container .item .labelBox .box .label {
    position: absolute;
    left: 50%;
    top:76px;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 28px;
    color: #18FFFC;
}
</style>