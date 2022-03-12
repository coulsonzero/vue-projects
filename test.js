const {invokeArrayFns}=require("@vue/shared");


chartData = {
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    seriesData: [60, 280, 50, 193, 390, 330, 220]
}

let xData = []
xData = chartData.day
// let xData = chartData.map(v => v.day)
console.log(xData)