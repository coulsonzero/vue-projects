const express = require("express");
const router = express.Router();

// 引用json
let testData = require("../mock/test.json");

router.get("/bar", function (req, res) {
	res.send({msg: "hello test", chartData: testData});
});

module.exports = router;
