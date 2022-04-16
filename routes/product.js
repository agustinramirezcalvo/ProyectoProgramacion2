const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/',  productController.detail ); // Quiero dentro de lo que es productController utilice la función detail. Esta ruta me lleva al detalle del producto
router.get('/add', productController.add); // Es solo /add porque yo en app.js le dije que cuando aparezca /product, que entre a este archivo. El primer /product ya lo tengo. Ya esta predeterminado para productRouter

module.exports = router;