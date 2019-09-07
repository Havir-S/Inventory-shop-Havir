var express = require('express');
var router = express.Router();
var shop_controller = require('../controllers/shopController');

router.post('/create', shop_controller.shop_create);

module.exports = router;
