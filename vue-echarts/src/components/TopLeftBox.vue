<template>
  <p>{{ title }}</p>
  <div class="peopleBg">
    <div class="people"></div>
    <div class="peopleNumber">{{ number }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "今日在线用户量",
      number: "113,000,000",
    };
  },
};
</script>

<style>
section .item p {
  position: absolute;
  padding: 13px 20px;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.86);
  font-family: "STXinwei";
  text-shadow: 3px 3px 12px #00aeff, 3px -3px 12px #00aeff,
    -3px -3px 12px #00aeff, -3px 3px 12px #00aeff;
}

/* item 1 */
.container .item .peopleBg {
  position: relative;
  top: 70px;
  height: 121px;
  margin: 20px 10px;
  background: url(../assets/images/peopleBg.png) no-repeat;
  background-size: 100% 121px;
}
.container .item .peopleBg .people {
  position: absolute;
  left: 30px;
  top: 26px;
  width: 68px;
  height: 68px;
  background: url(../assets/images/people.png) no-repeat;
}
.container .item .peopleBg .peopleNumber {
  position: absolute;
  left: 100px;
  top: 40px;
  width: 268px;
  height: 68px;
  /* background-color: #000; */
  color: #fff;
  font-size: 36px;
  letter-spacing: 5px;
  vertical-align: middle;
  text-align: center;
}
</style>