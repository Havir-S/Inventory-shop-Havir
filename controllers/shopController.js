const {body,validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
var Shop = require('../models/shop');



exports.shop_create = [

  body('shopnameCreate').trim(),
  body('shopaddressCreate').trim(),
  body('shopemailCreate').trim(),
  body('adminpassword', 'Admin password is wrong!').equals(process.env.DB_CHANGEPASS).trim(),

  sanitizeBody('shopnameCreate').escape(),
  sanitizeBody('shopaddressCreate').escape(),
  sanitizeBody('shopemailCreate').escape(),
  sanitizeBody('adminpassword').escape(),
  sanitizeBody('*').escape(),

  (req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('errors', {errors: errors.array()});
      return;
    } else if (req.body.adminpassword == process.env.DB_CHANGEPASS) {
    var shop = new Shop(
      {
        name: req.body.shopnameCreate,
        address: req.body.shopaddressCreate,
        emailz: req.body.shopemailCreate,
      }
    );
    shop.save(function(err) {
      if (err) {return next(err);}
      res.redirect('/');
    });
  }
}
]
