let express = require("express");
let router = express.Router();

router.get("/data", (req, res) => {
	res.send({msg: "我是路由地址3"});
});

module.exports = router;
