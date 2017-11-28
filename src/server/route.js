var express = require("express");
var router = express.Router();
var crud = require("./crud.js");

router.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

// 编写接口 添加商品
router.post("/createuser", function(req, res) {
	//接受用户参数
	var name = req.body.name;
	var type = req.body.type;
	var price = req.body.price;
	var num = req.body.num;
	var imgurl = req.body.imgurl;
	// 给方法的参数准备好
	var sql = "insert into product values (default,?,?,?,?,?)";
	var arr = [name,type,price,num,imgurl];
	crud.insertData(sql, arr, function(result) {
		if (result.affectedRows) {
			res.json(200, {
				"msg": "success",
				"code": 100
			})
		} else {
			// code:100成功  code：200失败
			res.send(200, {
				"msg": "error",
				"code": 200
			})
		}
	})
})
//注册用户
router.post("/regester", function(req, res) {
	//接受用户参数
	var username = req.body.username;
	var password = req.body.password;
	res.setHeader("Access-Control-Allow-Origin", "*");
	// 给方法的参数准备好
	var sql = "insert into user values (null,?,?)";
	var arr = [username, password];
	crud.insertData(sql, arr, function(result) {
		if (result.affectedRows) {
			res.json(200, {
				"msg": "success",
				"code": 100
			})
		} else {
			// code:100成功  code：200失败
			res.send(200, {
				"msg": "error",
				"code": 200
			})
		}
	})
})


router.post("/show", function(req, res) {
	// 用户传递的数据
	var name = req.body.name;
	console.log(444)
	var sql = "select * from product where type=?"
	console.log(sql)
	var loginArr = [name];
	crud.selectData(sql, loginArr, function(result) {
		if (result) {
			res.send(result)
		} else {
			res.send({
				"msg": "登陆失败"
			})
		}
	})
})

//用户登陆
router.post("/login", function(req, res) {
	// 用户传递的数据
	var name = req.body.username;
	var sql = "select * from user where uname=?"
	console.log(sql)
	var loginArr = [name];
	crud.selectData(sql, loginArr, function(result) {
		if (result) {
			res.send(result)
		} else {
			res.send({
				"msg": "登陆失败"
			})
		}
	})
})



module.exports = router;
