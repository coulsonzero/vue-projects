const express = require("express");
const app = express();


/* ===== 1. http://localhost:3000/ ====== */
/*
app.get("/", (req, res) => {
	res.send("hello express");
});

app.listen(3000);
console.log("listen on http://localhost:3000")
*/

/* ======== 2，配置路由接口 ======= */
/*
const Test = require("./router/test");
app.use("/test", Test);

app.listen(3080)
console.log("listen on http://localhost:3080/test/data")
*/


/* ========== 3.配置json引用接口 ========= */
/*
const Test = require("./router/jsonTest");
app.use("/jsonTest", Test);

app.listen(3080);
console.log("listen on http://localhost:3080/jsonTest/data");
*/

/* =============== 4.cors跨域 ==================== */
// cors解决跨域

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-length, Authorization, Accept, X-Requested-With, yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, PUST, GET, DELECT, OPTIONS');
    next();
})

// 访问的router文件
const Test = require("./router/reactData");
app.use("/", Test);

app.listen(8080);
// url
console.log("listen on http://localhost:8080/data");