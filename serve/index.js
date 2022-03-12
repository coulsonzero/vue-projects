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
const Test = require("./router/jsonTest");
app.use("/jsonTest", Test);

app.listen(3080);
console.log("listen on http://localhost:3080/jsonTest/data");