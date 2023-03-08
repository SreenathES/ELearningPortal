const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/api/auth/login', authController.login);
router.post('/api/auth/student/register', authController.registerStudent)

module.exports = router;