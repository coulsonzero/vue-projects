<template>
    <header>
        <div class="title">{{ title }}</div>
        <div class="subTitle">{{ subTitle }}</div>
        <!-- 5.绑定到页面上 -->
        <div class="dateTime">{{ dateTime }}</div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: '数据可视化-Echarts',
            subTitle: 'Platform operation and maintenance main data',
            // 1.声明时间变量
            dateTime: ''
        }
    },
    // 4[2]生命周期函数
    created() {
        this.setCurrentTime();
    },
    // 常量：computed: {dateTime() {...}}
    // 2.获取时间
    methods: {
        getDateTime() {
            const d    = new Date();
            const year = d.getFullYear();
            let  month = d.getMonth()+1;
            let    day = d.getDate();
            let  hours = d.getHours();
            let   mins = d.getMinutes();
            let   secs = d.getSeconds();

            // 时间格式化
            month = month < 10 ? `0${month}` : month;   // let 不可重复申明， const为常量，var可再次申明！
            day   = day   < 10 ? `0${day}`   : day;
            hours = hours < 10 ? `0${hours}` : hours;
            mins  = mins  < 10 ? `0${mins}`  : mins;
            secs  = secs  < 10 ? `0${secs}`  : secs;
            const date = `${year}-${month}-${day}`;
            const time = `${hours}:${mins}:${secs}`;
            const dateTime = hours < 12 ? `${date} AM ${time}` : `${date} PM ${time}`;
            // 3.与data中的变量绑定
            this.dateTime = dateTime
        },
        // 4[2].间隔计算时间
        setCurrentTime(){
            setInterval(this.getDateTime, 1000)
        }
    },
    // 4[1].每隔1s计算时间
    /*
    mounted() {
        setInterval(() => {
            this.getDateTime()
        }, 1000)
    }
    */
}


</script>

<style lang="scss">
header {
    position: relative;
    width: 100%;
    height: 100px;
    background: url(../assets/images/header.png) no-repeat;
    background-size: 100% 100%;
    .title {
        position: absolute;
        color: #fff;
        font-size: 2.6rem;
        text-align: center;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'STXinwei';
        letter-spacing: 6px;
        text-shadow: 3px 3px 12px #00aeff,
                    3px -3px 12px #00aeff,
                    -3px -3px 12px #00aeff,
                    -3px 3px 12px #00aeff;
    }
    .subTitle {
        position: absolute;
        color: #fff;
        font-size: 1.2rem;
        text-align: center;
        top: 73%;
        left: 50%;
        transform: translate(-50%, -50%);
        letter-spacing: 0.5px;
        font-weight: 300;
    }
    .dateTime {
        position: absolute;
        color: #fff;
        font-size: 1.6rem;
        top: 17%;
        padding-left: 30px;
        letter-spacing: 2px;
        text-shadow: 3px 3px 12px #00aeff,
                    3px -3px 12px #00aeff,
                    -3px -3px 12px #00aeff,
                    -3px 3px 12px #00aeff;
    }
}

</style>