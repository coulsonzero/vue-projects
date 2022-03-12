<template>
  <div class="item i1">
    <div class="title">{{ title }}</div>
    <div class="peopleBg">
      <div class="people"></div>
      <div class="peopleNumber">{{ number }}</div>
    </div>
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

<style lang="scss">
.i1 {
  position: relative;
  display: grid;
  place-items: center;
  p {
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
  .peopleBg {
    position: relative;
    margin: 0 1rem;
    padding: 2rem;
    background: url(../assets/images/peopleBg.png) no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .people {
      width: 5rem;
      height: 5rem;
      background: url(../assets/images/people.png) no-repeat;
      background-size: 100% 100%;
    }
    .peopleNumber {
      color: #fff;
      font-size: 2.6rem;
      letter-spacing: .4rem;
    }
  }
}
</style>