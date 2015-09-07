var express = require('express');
var router = express.Router();

/* GET home page. */
<<<<<<< HEAD
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

module.exports.index = function(req, res) {
	res.render('index', {title: 'Express'});
}
=======
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
>>>>>>> 3231fcce66e578cb3e24a50b06852cfde9cd45b4
