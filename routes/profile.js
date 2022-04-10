const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/', profileController.index);
router.get('/register', profileController.register);
router.get('/login', profileController.login);

module.exports = router;