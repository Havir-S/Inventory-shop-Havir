var express = require('express');
var router = express.Router();
var product_controller = require('../controllers/productController');

router.post('/keyboard/create', product_controller.keyboard_create);

router.post('/mouse/create', product_controller.mouse_create);

router.post('/keyboardinstance/create', product_controller.keyboardinstance_create);

router.post('/mouseinstance/create', product_controller.mouseinstance_create);

router.get('/:product/:id', product_controller.product_detail);



module.exports = router;
