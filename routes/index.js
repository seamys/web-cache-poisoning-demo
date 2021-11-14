var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  var ip = req.headers["true-client-ip"] || req.socket.remoteAddress
  res.render('index', { title: 'Express', ipAddress: ip });
});

module.exports = router;
