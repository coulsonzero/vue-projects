<template>
    <header>
        <h1>{{ title }}</h1>
        <h6>{{ subTitle }}</h6>
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

<style>
header {
    position: relative;
    width: 100%;
    height: 100px;
    background: url(../images/header.png) no-repeat;
    background-size: 100% 100%;
}
header h1 {
    position: absolute;
    color: #fff;
    font-size: 38px;
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
header h6 {
    position: absolute;
    color: #fff;
    font-size: 12px;
    text-align: center;
    top: 73%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.5px;
    font-weight: 300;
}
header .dateTime {
    position: absolute;
    color: #fff;
    font-size: 23px;
    top: 17%;
    padding-left: 30px;
    letter-spacing: 2px;
    text-shadow: 3px 3px 12px #00aeff,
                 3px -3px 12px #00aeff,
                 -3px -3px 12px #00aeff,
                 -3px 3px 12px #00aeff;
}

</style>