<template>
  <div class="item i2">
    <div class="title">{{ title }}</div>
    <div v-for="(item, index) in items" :key="index" :class="text + item.id" >
        <div class="labelName">{{ item.name }}</div>
        <div class="label">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "平台运行统计",
      text: "labelBox box",
      items: [
        { id: 1, name: "应用上架数", value: "50322" },
        { id: 2, name: "租户量", value: "50322" },
        { id: 3, name: "服务商量", value: "50322" },
        { id: 4, name: "用户总量", value: "50322" },
        { id: 5, name: "总成交量", value: "50322" },
        { id: 6, name: "总订阅量", value: "50322" },
        { id: 7, name: "总访问量", value: "50322" },
        { id: 8, name: "应用总数", value: "50322" },
      ],
    };
  },
};
</script>

<style lang="scss">

.item.i2{
  display: flex;
  justify-content: center;
  align-items: center;
  .labelBox {
    width: 100%;
    height: 10rem;
    margin: 0 .5rem;
    background: url(../assets/images/laberBox.png);
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    font-size: 1.4rem;
    padding-top: 1.2rem;
  }
}
</style>