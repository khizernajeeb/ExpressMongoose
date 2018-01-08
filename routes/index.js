var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.send('sdjhjsdhfjh')
  //res.redirect('/catalog');
});

module.exports = router;
