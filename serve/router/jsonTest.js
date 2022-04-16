const express = require("express");
const router = express.Router();

// 引用json
let testData = require("../mock/test.json");

router.get("/data", function (req, res) {
    // 输出json
	res.send({msg: "hello test", chartData: testData});
});


module.exports = router;
