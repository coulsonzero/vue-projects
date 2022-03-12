<script>
import Header from '../components/Header.vue'
import TopLeftBox from '../components/TopLeftBox.vue'
import TopRightBox from '../components/TopRightBox.vue'

export default {
    components: {
        Header,
        TopLeftBox,
        TopRightBox,
    }
}
</script>

<template>
    <div class="home">
        <Header />
        <section class="container">
            <div class="item i1">
                <TopLeftBox />
            </div>
            <div class="item i2">
                <TopRightBox />
            </div>
    </section>
    </div>
</template>

<style lang="scss">
.home {
    background: url('../assets/images/bg.png') no-repeat top center;
    line-height: 1.15;
    width: 100%;
    min-height: 100vh;
}

/* 主体部分 */
.container {
    top: 70px;
    width: 100%;
    display: grid;
    grid-template-columns: 460px 1fr 1fr 1fr;
    grid-template-rows: 280px 345px 345px;
    grid-template-areas:
    "i1 i2 i2 i2"
    "i3 i4 i4 i5"
    "i6 i7 i7 i8";
    row-gap: 10px;
    column-gap: 15px;

}
.container .item {
    position: relative;
    margin-left: 17px;
    padding: 10px;
    color: #fff;
    text-align: center;
}
.container .item:nth-child(1) {
    background: url(../assets/images/box.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i1;
}
.container .item:nth-child(2) {
    background: url(../assets/images/labelBg.png) no-repeat;
    background-size: 100% 100%;
    grid-area: i2;
}
</style>