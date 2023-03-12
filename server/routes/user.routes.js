const express = require('express');
const authController = require('../controllers/authController');
const { validateLogin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/api/auth/login', validateLogin, authController.login);
router.post('/api/auth/student/register', authController.registerStudent)

module.exports = router;