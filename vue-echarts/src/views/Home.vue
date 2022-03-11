<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header,
    }
}
</script>

<template>
    <div class="home">
        <Header />
        <section class="container">
        <div class="item i1">
            <p>今日在线用户量</p>
            <div class="peopleBg">
                <div class="people"></div>
                <div class="peopleNumber">113,000,000</div>
            </div>
        </div>
        <div class="item i2">
            <p>平台运行统计</p>
            <div class="labelBox box1">
                <div class='box'>
                    <div class='labelName'>应用上架数</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box2">
                <div class='box'>
                    <div class='labelName'>租户量</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box3">
                <div class='box'>
                    <div class='labelName'>服务商量</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box4">
                <div class='box'>
                    <div class='labelName'>用户总量</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box5">
                <div class='box'>
                    <div class='labelName'>总成交量</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box6">
                <div class='box'>
                    <div class='labelName'>总订阅量</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box7">
                <div class='box'>
                    <div class='labelName'>总访问量</div>
                    <div class="label">50322</div>
                </div>
            </div>
            <div class="labelBox box0">
                <div class='box'>
                    <div class='labelName'>应用总数</div>
                    <div class="label">50322</div>
                </div>
            </div>
        </div>
        <div class="item i3">
            <p>应用数量排名</p>
            <div class="chart bar"></div>
        </div>
        <div class="item i4">
            <p>平台访问量</p>
            <div class="chart line1"></div>
        </div>
        <div class="item i5">
            <p>成交类型分布情况</p>
            <div class="chart pie1"></div>
            <div class="loading"></div>
        </div>
        <div class="item i6">
            <p>应用数量排名2</p>
            <div class="chart radar"></div>
        </div>
        <div class="item i7">
            <p>平台成交量</p>
            <div class="chart line2"></div>
        </div>
        <div class="item i8">
            <p>订阅类型分布情况</p>
            <div class="chart pie2"></div>
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

</style>