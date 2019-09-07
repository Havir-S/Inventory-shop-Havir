var express = require('express');
var router = express.Router();
var mainpage_controller = require('../controllers/mainpageController');

/* GET home page. */
router.get('/', mainpage_controller.index);

router.get('/products', mainpage_controller.products);

router.get('/admin-room', mainpage_controller.admin_room);

router.get('/admin-room/:product/update/:id', mainpage_controller.admin_room_edit);

router.post('/update/:product', mainpage_controller.update_object);

router.post('/delete/:product', mainpage_controller.delete_object);

router.get('/storage', mainpage_controller.storage);

router.get('/storage/:product/update/:id', mainpage_controller.storage_update);

router.post('/storage/:product/:action/:id', mainpage_controller.storage_update_post);

router.post('/storage/:product/delete', mainpage_controller.storage_delete);

module.exports = router;
