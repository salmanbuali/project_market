var express = require("express")
var router = express.Router()
const itemsController = require("../controllers/items")

router.get("/show/:id", itemsController.show)
// router.get('/show/65c873af04271ac777f53f3a', itemsController.show)

//go into the homepage, view all items
router.get("/", itemsController.index)
// go into create item page
router.get("/new", itemsController.createItemPage)
// create an item
router.post("/:id", itemsController.newItem)
// go into item update page
router.get("/:id/update", itemsController.updatePage)
// update an item
router.put("/:id", itemsController.updateItem)
// delete an item
router.delete("/:id", itemsController.deleteItem)

module.exports = router
