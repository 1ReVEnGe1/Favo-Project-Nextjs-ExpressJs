//External Modules
const {Router} = require('express');
const authenticate = require('../middlewares/authenticate');
const adminController = require('../controllers/adminController')

//Initializings
const router = new Router()



router.post('/create' , authenticate , adminController.handleAddBlog );

router.get('/blogs' , authenticate , adminController.getBlogs );

router.delete('/blogs/:id' , authenticate , adminController.deleteBlog);

router.patch('/blogs/:id' , authenticate , adminController.changeBlogStatus);

router.post('/upload-image' , authenticate , adminController.uploadAdapterImg);

router.get('/get-post/:id' , authenticate , adminController.getBlog);

// PUT /api/dashboard
router.put('/edit-blog/:id' , authenticate , adminController.editBlog )

module.exports = router