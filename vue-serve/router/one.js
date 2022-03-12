let express = require('express');
let router = express.Router();

let testData = require("../mock/test.json")

router.get('/data', (req, res) => {
    res.send({msg: "我是路由地址1", chartData: testData})
})

module.exports = router;