var express = require('express');
var router = express.Router();

let todos = [
  {
    id: "123",
    text: "這是範例"
  }
];


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
//前端使用了http的get method，就會發送給前端"todos"這個object
router.get("/todos", (req, res, next) => {
  res.send(todos)

})
  .post("/todos", (req, res, next) => {
    console.log(req.body);
    res.send();

  })

module.exports = router;
