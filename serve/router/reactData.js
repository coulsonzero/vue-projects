const express = require("express")
const router = express.Router()

// 引用json
let reactData = require("../mock/reactData.json")

router.get("/data", (req, res) => {
	// 输出json
	res.send({msg: "hello test", data: reactData})
})



module.exports = router
