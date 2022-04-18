var express = require('express'); 
var router = express.Router(); // Método de Express

const indexController = require('../controllers/indexController') 

router.get('/', indexController.index); 
router.get('/search', indexController.search);

module.exports = router;
