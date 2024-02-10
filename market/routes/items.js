var express = require('express');
var router = express.Router();

router.get('/show', (req, res) => {
  res.render('items/show')
} )

router.get('/', (req, res) => {
  res.render('items/');
});



module.exports = router;