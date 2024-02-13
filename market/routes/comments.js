var express = require("express")
var router = express.Router()
const commentsController = require("../controllers/comments")

router.get("/show/:id", commentsController.show)
// router.get('/show/65c873af04271ac777f53f3a', itemsController.show)

module.exports = router
