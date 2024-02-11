var express = require("express")
var router = express.Router()
const ordersController = require("../controllers/orders")

router.post('/new/:id', ordersController.newOrder)


module.exports = router