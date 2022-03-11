<template>
    <header>
        <h1>{{ title }}</h1>
        <h6>{{ subTitle }}</h6>
        <div class="dateTime">{{ dateTime }}</div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            title: '数据可视化-Echarts',
            subTitle: 'Platform operation and maintenance main data',
            dateTime: ''
        }
    },
    // 常量：computed: {dateTime() {...}}
    methods: {
        getDateTime() {
            const d = new Date();
            const year = d.getFullYear();
            const month = d.getMonth()+1;
            const day = d.getDate();
            const date = `${year}-${month}-${day}`;
            const hours = d.getHours();
            let mins = d.getMinutes();
            mins = mins < 10 ? `0${mins}` : mins; // let 不可重复申明， const为常量，var可再次申明！
            let secs = d.getSeconds();
            secs = secs < 10 ? `0${secs}` : secs;
            const time = `${hours}:${mins}:${secs}`;
            const dateTime = hours < 12 ? `${date} AM ${time}` : `${date} PM ${time}`;
            this.dateTime = dateTime
        },
    },
    mounted() {
        setInterval(() => {
            this.getDateTime()
        }, 1000)
    }
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