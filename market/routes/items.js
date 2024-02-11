var express = require("express")
var router = express.Router()
const itemsController = require("../controllers/items")

router.get('/show', (req, res) => {
  res.render('items/show')
} )

router.get("/", itemsController.index)

router.get("/new", itemsController.createItemPage)

router.post("/:id", itemsController.newItem)

module.exports = router

