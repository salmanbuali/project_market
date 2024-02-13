var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

router.get('/profile/:id', usersCtrl.show)

router.get('/orders/:id', usersCtrl.showOrders)

module.exports = router
