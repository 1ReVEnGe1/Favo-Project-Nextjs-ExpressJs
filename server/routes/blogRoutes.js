//External Modules
const { Router } = require('express')
const blogController = require('../controllers/blogController')

//Initializing
const router = new Router()

// api/blogs
router.get('/blogs' , blogController.getBlogs )

// api/blogs/latest
router.get('/blogs/latest' , blogController.getLatestblogs)

router.get('/blog/:id' , blogController.getBlog)

module.exports = router
