const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController')

router.get('/', profileController.index);
router.get('/register', profileController.register);
router.get('/login',profileController.login);
router.get('/edit', profileController.edit);

module.exports = router;