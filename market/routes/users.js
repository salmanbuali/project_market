var express = require("express")
var router = express.Router()
const usersCtrl = require("../controllers/users")
// show user profile
router.get("/profile/:id", usersCtrl.show)
// show sold items
router.get("/orders/sold/:id", usersCtrl.showSold)
// show purchased items
router.get("/orders/purchased/:id", usersCtrl.showPurchased)
// show all orders
router.get("/orders/:id", usersCtrl.showOrders)

module.exports = router
