const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController')

router.get('/profile', profileController.index);
router.get('/profile/register', profileController.register);
router.get('/profile/login',profileController.login);
router.get('/profile/edit', profileController.edit);

module.exports = router;