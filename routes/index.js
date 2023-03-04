var express = require('express');
var app = express.Router();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/teste', function(req, res, next) {
  const { teste } = req.body;

  res.send("O número digitado foi o: " + teste);
});

module.exports = app;
