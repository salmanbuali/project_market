var express = require('express')
var router = express.Router()
const itemsController = require('../controllers/items')

router.get('/show/:id', itemsController.show)

//go into the homepage, view all items
router.get('/', itemsController.index)

//go to filter function
router.get('/filter', itemsController.filter)

// go into create item page
router.get('/new', itemsController.createItemPage)
// create an item
router.post('/:id', itemsController.newItem)
// go into item update page
router.get('/:id/update', itemsController.updatePage)
// update an item
router.put('/:id', itemsController.updateItem)
// delete an item
router.delete('/:id', itemsController.deleteItem)
// search for an item
// router.get("/search", itemsController.search)
// change the pricing
router.get('/price', itemsController.changePricing)

module.exports = router
