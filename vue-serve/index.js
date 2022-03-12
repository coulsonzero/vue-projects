let express = require("express");
let app = express();

// 引用路由文件

let chartOne = require("./router/one")
let chartTwo = require("./router/two")
let chartThree = require("./router/three")
let chartFour = require("./router/four")

// 使用中间件

app.use("/one", chartOne)
app.use("/two", chartTwo)
app.use("/three", chartThree)
app.use("/four", chartFour)

app.listen(8090)
console.log("listening on http://localhost:8090/one/data");