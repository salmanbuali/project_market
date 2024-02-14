var express = require("express")
var router = express.Router()
const ordersController = require("../controllers/orders")

//create an new order
router.post("/new/:id", ordersController.newOrder)

module.exports = router
