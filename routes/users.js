var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var _json = ''
    _json += '{';
    _json += '}';
router.get('/test', function (req, res) {
	res.json(JSON.parse(_json))
});


module.exports = router;
