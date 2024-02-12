var express = require("express")
var router = express.Router()
const itemsController = require("../controllers/items")


router.get('/show/:id', itemsController.show)
// router.get('/show/65c873af04271ac777f53f3a', itemsController.show)

router.get("/", itemsController.index)

router.get("/new", itemsController.createItemPage)

router.post("/:id", itemsController.newItem)

router.get("/:id/update", itemsController.updatePage)

router.put("/:id", itemsController.updateItem)

module.exports = router
