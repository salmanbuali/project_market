var express = require("express")
var router = express.Router()
const commentsController = require("../controllers/comments")

// router.get("/show/:id", commentsController.show)
// router.get('/show/65c873af04271ac777f53f3a', itemsController.show)

// POST /items/show/:id
router.post("/items/show/:id", commentsController.createComment)

// get /planets/:planetId/plants
router.delete("/items/comments/:id", commentsController.deleteComment)

module.exports = router
