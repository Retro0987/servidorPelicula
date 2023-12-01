const express    = require('express');
const router     = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../utils/auth.middleware');


router.post('/', userController.registrarUser);  
router.get('/', authMiddleware.authenticateToken,userController.getUsers);
router.post('/login', userController.loginUser);


module.exports = router;