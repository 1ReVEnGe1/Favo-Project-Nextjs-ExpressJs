//External Modules
const { Router } = require('express');

//Internal Modules
const userController = require('../controllers/userController');
const authenticate = require('../middlewares/authenticate');
//-----------------------------------------------
const router = new Router()


// POST api/auth/register
router.post('/register', userController.createUser);

// POST api/auth/login
router.post('/login', userController.handleLogin);

// POST api/auth/login
router.post('/verify-user-token' , userController.verifyUser);

router.get('/get-user' , authenticate , userController.getUser )

module.exports = router