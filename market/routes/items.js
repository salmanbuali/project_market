var express = require("express")
var router = express.Router()
const itemsController = require("../controllers/items")

//show an item
router.get("/show/:id", itemsController.show)
//go into the homepage, view all items
router.get("/", itemsController.index)
//go to filter function
router.get("/filter", itemsController.filter)
// go to create item page
router.get("/new", itemsController.createItemPage)
// create an item
router.post("/:id", itemsController.newItem)
// go to item update page
router.get("/:id/update", itemsController.updatePage)
// update an item
router.put("/:id", itemsController.updateItem)
// delete an item
router.delete("/:id", itemsController.deleteItem)

module.exports = router
