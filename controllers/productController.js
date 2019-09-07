
let Keyboard = require('../models/keyboard');
let Mouse = require('../models/mouse');
let MouseInstance = require('../models/mouseInstance');
let KeyboardInstance = require('../models/keyboardInstance');
let Shop = require('../models/shop');
require('dotenv').config();

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

let async = require('async');

exports.keyboard_create = [

  body('keyboardnameCreate').isLength({min:1}).trim().withMessage('Model must be specified'),
  body('keyboarddescriptionCreate').isLength({min:1}).trim().withMessage('Description must be specified'),
  body('keyboardbrandCreate').isLength({min:1}).trim().withMessage('Brand must be specified'),
  body('keyboardpriceCreate').isNumeric(),
  body('keyboardurlCreate').isLength({min:1}).trim(),
  body('time_added', 'Invalid date').optional({checkFalsy: true}).isISO8601(),
  body('adminpassword', 'Admin password is wrong!').equals(process.env.DB_CHANGEPASS).trim(),

  sanitizeBody('keyboardnameCreate').escape(),
  sanitizeBody('keyboarddescriptionCreate').escape(),
  sanitizeBody('keyboardbrandCreate').escape(),
  sanitizeBody('keyboardpriceCreate').escape(),
  sanitizeBody('keyboardurlCreate').escape(),
  sanitizeBody('time_added').toDate(),
  sanitizeBody('adminpassword').escape(),
  sanitizeBody('*').escape(),
  (req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('errors', {errors: errors.array()});
      return;
    }
    else if(req.body.adminpassword == process.env.DB_CHANGEPASS) {

      var keyboard = new Keyboard(
        {
          model: req.body.keyboardnameCreate,
          description: req.body.keyboarddescriptionCreate,
          brand: req.body.keyboardbrandCreate,
          price: req.body.keyboardpriceCreate,
          image_url: req.body.keyboardurlCreate,
          time_Added: Date.now(),
        }
      );
      keyboard.save(function(err) {
        if (err) { return next(err);}

        res.redirect('/products');
      });
    }
  }
]

exports.product_detail = function(req,res,next) {

  if (req.params.product == 'keyboard') {

    async.parallel(
      {
        keyboard: function(callback) {
          Keyboard.findById(req.params.id).populate('brand').exec(callback);
        },
        keyboardCount: function(callback) {
          KeyboardInstance.countDocuments({type: req.params.id}).exec(callback);
        },
        shops: function(callback) {
          Shop.find().exec(callback);
        }
      }, function(err, results) {
        if (err) { return next(err); }
        res.render('productview', {product:results.keyboard, productsCount: results.keyboardCount, shops: results.shops })
      }
    )
}

  else if (req.params.product == 'mouse') {

    async.parallel(
      {
        mouse: function(callback) {
          Mouse.findById(req.params.id).populate('brand').exec(callback);
        },
        mouseCount: function(callback) {
          MouseInstance.countDocuments({type: req.params.id}).exec(callback);
        },
        shops: function(callback) {
          Shop.find().exec(callback);
        }
      }, function(err, results) {
        if (err) { return next(err); }
        res.render('productview', {product:results.mouse, productsCount: results.mouseCount, shops: results.shops })
      }
    )
  }
}

exports.mouse_create = [

  body('mousenameCreate').isLength({min:1}).trim().withMessage('Model must be specified'),
  body('mousedescriptionCreate').isLength({min:1}).trim().withMessage('Description must be specified'),
  body('mousebrandCreate').isLength({min:1}).trim().withMessage('Brand must be specified'),
  body('mousepriceCreate').isNumeric(),
  body('mouseurlCreate').isLength({min:1}).trim(),
  body('time_added', 'Invalid date').optional({checkFalsy: true}).isISO8601(),
  body('adminpassword', 'Admin password is wrong!').equals(process.env.DB_CHANGEPASS).trim(),

  sanitizeBody('mousenameCreate').escape(),
  sanitizeBody('mousedescriptionCreate').escape(),
  sanitizeBody('mousebrandCreate').escape(),
  sanitizeBody('mousepriceCreate').escape(),
  sanitizeBody('mouseurlCreate').escape(),
  sanitizeBody('time_added').toDate(),
  sanitizeBody('adminpassword').escape(),
  sanitizeBody('*').escape(),


(req,res,next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render('errors', {errors: errors.array()});
    return;
  }
  else if (req.body.adminpassword == process.env.DB_CHANGEPASS) {

    var mouse = new Mouse(
      {
        model: req.body.mousenameCreate,
        description: req.body.mousedescriptionCreate,
        brand: req.body.mousebrandCreate,
        price: req.body.mousepriceCreate,
        image_url: req.body.mouseurlCreate,
        time_Added: Date.now(),
      }
    );
    mouse.save(function(err) {
      if (err) {return console.log(err);}

      res.redirect('/products');
    });
  }
}

]

exports.keyboardinstance_create = [

  body('keyboardInstanceTypeCreate').trim(),
  body('keyboardInstanceShopCreate').trim(),
  body('keyboardInstanceStatusCreate').trim(),
  body('adminpassword', 'Admin password is wrong!').equals(process.env.DB_CHANGEPASS).trim(),

  sanitizeBody('keyboardInstanceTypeCreate').escape(),
  sanitizeBody('keyboardInstanceShopCreate').escape(),
  sanitizeBody('keyboardInstanceStatusCreate').escape(),
  sanitizeBody('adminpassword').escape(),
  sanitizeBody('*').escape(),

  (req,res,next) => {

    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      res.render('errors', {errors: errors.array()});
      return ;
    }
    else if (req.body.adminpassword == process.env.DB_CHANGEPASS) {
      var keyboardinstance = new KeyboardInstance(
        {
          type: req.body.keyboardInstanceTypeCreate,
          inshop: req.body.keyboardInstanceShopCreate,
          status: req.body.keyboardInstanceStatusCreate,
          dayCreated: Date.now(),
        }
      );
      keyboardinstance.save(function(err) {
        if (err) {return console.log(err);}

        res.redirect('/products');
      });
    }
  }
]

exports.mouseinstance_create = [

  body('mouseInstanceTypeCreate').trim(),
  body('mouseInstanceShopCreate').trim(),
  body('mouseInstanceStatusCreate').trim(),
  body('adminpassword', 'Admin password is wrong!').equals(process.env.DB_CHANGEPASS).trim(),

  sanitizeBody('mouseInstanceTypeCreate').escape(),
  sanitizeBody('mouseInstanceShopCreate').escape(),
  sanitizeBody('mouseInstanceStatusCreate').escape(),
  sanitizeBody('adminpassword').escape(),
  sanitizeBody('*').escape(),

  (req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render('errors', {errors: errors.array()});
      return ;
    }
    else if (req.body.adminpassword == process.env.DB_CHANGEPASS) {
      var mouseinstance = new MouseInstance(
        {
          type: req.body.mouseInstanceTypeCreate,
          inshop: req.body.mouseInstanceShopCreate,
          status: req.body.mouseInstanceStatusCreate,
          dayCreated: Date.now(),
        }
      );
      mouseinstance.save(function(err) {
        if (err) {return console.log(err);}

        res.redirect('/products');
      });
    }
  }
]
