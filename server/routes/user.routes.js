const express = require('express');
const authController = require('../controllers/authController');
const { validateLogin, validateStudentData } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/api/auth/login', validateLogin, authController.login);
router.post('/api/auth/student/register', validateStudentData, authController.registerStudent)

module.exports = router;