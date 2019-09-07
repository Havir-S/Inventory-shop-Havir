var async = require('async');
var Brand = require('../models/brand');
var Keyboard = require('../models/keyboard');
var Mouse = require('../models/mouse');
var Shop = require('../models/shop');
var MouseInstance = require('../models/mouseInstance');
var KeyboardInstance = require('../models/keyboardInstance');
require('dotenv').config();
exports.index = function(req,res) {

  async.parallel({
    keyboards: function(callback) {
      Keyboard.find().sort([['time_Added', 'ascending']]).exec(callback);
    },
    mouses: function(callback) {
      Mouse.find().sort([['time_Added', 'ascending']]).exec(callback);
    }
  }, function(err,results) {
    if (err) {return console.log(err);}

  res.render('mainpage', {mouses: results.mouses, keyboards: results.keyboards});
  })


};

exports.admin_room = function(req,res, next) {

  async.parallel({
    brands: function(callback) {
      Brand.find().exec(callback);
    },
    keyboards: function(callback) {
      Keyboard.find().exec(callback);
    },
    mouses: function(callback) {
      Mouse.find().exec(callback);
    },
    shops: function(callback) {
      Shop.find().exec(callback);
    }
  }, function(err, results) {
    if (err) {return console.log(err)}
    res.render('adminroom', {brands: results.brands, mouses:results.mouses, keyboards:results.keyboards, shops: results.shops});
  });
  };

  exports.products = function(req,res) {

    async.parallel({
      keyboards: function(callback) {
        Keyboard.find().sort([['time_Added', 'ascending']]).populate('brand').exec(callback);
      },
      mouses: function(callback) {
        Mouse.find().sort([['time_Added', 'ascending']]).populate('brand').exec(callback);
      },
      keyboardsCounter: function(callback) {
        Keyboard.countDocuments({}, callback);
      },
      mousesCounter: function(callback) {
        Mouse.countDocuments({}, callback);
      }
    }, function(err, results) {
      if (err) {return console.log(err)};
      if (results === null) {return console.log('results is null')};
      res.render('products',{mouses:results.mouses, keyboards:results.keyboards, mousesCounter: results.mousesCounter, keyboardsCounter: results.keyboardsCounter});
    });
  };

exports.admin_room_edit = function(req,res,next) {

  if (req.params.product == 'keyboard'){

    async.parallel({
      keyboard: function(callback) {
        Keyboard.findById(req.params.id).populate('brand').exec(callback);
      },
      brands: function(callback) {
        Brand.find().exec(callback);
      },
      keyboards: function(callback) {
        Keyboard.find().populate('brand').exec(callback);
      },
      mouses: function(callback) {
        Mouse.find().populate('brand').exec(callback);
      },
      shops: function(callback) {
        Shop.find().exec(callback);
      }
    }, function(err,results) {
      if (err) {return console.log(err);};
      if (results === null) {return console.log('results is null')};
      res.render('adminroomUpdateDeleteKeyboard', {brands: results.brands,  keyboard:results.keyboard, shops: results.shops, keyboards: results.keyboards, mouses: results.mouses});
    });
  } else
  if (req.params.product == 'mouse'){

    async.parallel({
      mouse: function(callback) {
        Mouse.findById(req.params.id).populate('brand').exec(callback);
      },
      brands: function(callback) {
        Brand.find().exec(callback);
      },
      keyboards: function(callback) {
        Keyboard.find().populate('brand').exec(callback);
      },
      mouses: function(callback) {
        Mouse.find().populate('brand').exec(callback);
      },
      shops: function(callback) {
        Shop.find().exec(callback);
      }
    }, function(err, results) {
      if (err) {return console.log(err);};
      if (results === null) {return console.log('results is null')};
      res.render('adminroomUpdateDeleteMouse', {brands: results.brands, mouse:results.mouse, shops: results.shops, keyboards: results.keyboards, mouses: results.mouses});
    });
  }
}

exports.update_object =[

  (req,res,next) => {
    console.log(req.body);
    console.log(req.params);
    if (req.params.product == 'keyboard'  && req.body.adminpassword == process.env.DB_CHANGEPASS) {
      var keyboard = new Keyboard(
        {
          model: req.body.keyboardnameUpdate,
          description: req.body.keyboarddescriptionUpdate,
          brand: req.body.keyboardbrandUpdate,
          price: req.body.keyboardpriceUpdate,
          image_url: req.body.keyboardurlUpdate,
          time_Added: Date.now(),
          _id: req.body.keyboardidUpdate
        }
      );
      Keyboard.findByIdAndUpdate(req.body.keyboardidUpdate, keyboard, function(err,newkeyboard) {
        if (err) {return console.log(err);};

        res.redirect('/products');
      });
    } else if (req.params.product == 'mouse'  && req.body.adminpassword == process.env.DB_CHANGEPASS) {
        var mouse = new Mouse(
          {
            model: req.body.mousenameUpdate,
            description: req.body.mousedescriptionUpdate,
            brand: req.body.mousebrandUpdate,
            price: req.body.mousepriceUpdate,
            image_url: req.body.mouseurlUpdate,
            time_Added: Date.now(),
            _id: req.body.mouseidUpdate
          }
        );
        Mouse.findByIdAndUpdate(req.body.mouseidUpdate, mouse, function(err, newmouse) {
          if (err) {return console.log(err);};

          res.redirect('/products');
        });
      }
    }

]

exports.delete_object = [

  (req,res,next) => {
    if (req.params.product == 'keyboard'  && req.body.adminpassword == process.env.DB_CHANGEPASS) {
      Keyboard.findByIdAndRemove(req.body.keyboardidDelete, function(err) {
        if (err) {return next(err);}

        res.redirect('/products');
      })
    } else if (req.params.product == 'mouse'  && req.body.adminpassword == process.env.DB_CHANGEPASS) {
      Mouse.findByIdAndRemove(req.body.mouseidDelete, function(err) {
        if (err) {return next(err);};

        res.redirect('/products');
      })
    }

  }
]

exports.storage = function(req,res,next) {

  async.parallel({
    mouseInstances: function(callback) {
      MouseInstance.find().populate('type').populate('inshop').exec(callback);
    },
    keyboardInstances: function(callback) {
      KeyboardInstance.find().populate('type').populate('inshop').exec(callback);
    }
  }, function(err,results) {
    if (err) {return next(err);}

    res.render('instancestorage', {keyboardInstances: results.keyboardInstances, mouseInstances: results.mouseInstances});
  });

}

exports.storage_update = function(req,res,next) {

  if (req.params.product == 'mouseinstance') {

    async.parallel({
      mouseinstance: function(callback) {
        MouseInstance.findById(req.params.id).populate('type').populate('inshop').exec(callback);
      },
      mouses: function(callback) {
        Mouse.find().exec(callback);
      },
      shops: function(callback) {
        Shop.find().exec(callback);
      }
    }, function(err, results) {
      if (err) {return console.log(err);};

      res.render('instancestorageUpdateMouseInstance', {product: results.mouseinstance, mouses: results.mouses, shops: results.shops});

    });

  } else if (req.params.product == 'keyboardinstance') {

    async.parallel({
      keyboardinstance: function(callback) {
        KeyboardInstance.findById(req.params.id).populate('type').populate('inshop').exec(callback);
      },
      keyboards: function(callback) {
        Keyboard.find().exec(callback);
      },
      shops: function(callback) {
        Shop.find().exec(callback)
      }
    }, function(err, results) {
      if (err) {return console.log(err);};

      res.render('instancestorageUpdateKeyboardInstance', {product: results.keyboardinstance, keyboards: results.keyboards, shops: results.shops});

    });

  }

}

exports.storage_update_post = [

  (req,res,next) => {
    console.log('it got here!');
    if (req.params.product == 'keyboardinstance' && req.params.action == 'update' && req.body.adminpassword == process.env.DB_CHANGEPASS) {

      var keyboardinstance = new KeyboardInstance(
        {
          type: req.body.keyboardInstanceTypeUpdate,
          inshop: req.body.keyboardInstanceShopUpdate,
          status: req.body.keyboardInstanceStatusUpdate,
          dayCreated: Date.now(),
          _id: req.params.id
        }
      );

      KeyboardInstance.findByIdAndUpdate(req.params.id, keyboardinstance, function(err, results) {
        if (err) {return console.log(err);}

        res.redirect('/storage');
      });


    } else if (req.params.product == 'mouseinstance' && req.params.action == 'update' && req.body.adminpassword == process.env.DB_CHANGEPASS) {
      var mouseinstance = new MouseInstance(
        {
          type: req.body.mouseInstanceTypeUpdate,
          inshop: req.body.mouseInstanceShopUpdate,
          status: req.body.mouseInstanceStatusUpdate,
          dayCreated: Date.now(),
          _id: req.params.id
        }
      );

      MouseInstance.findByIdAndUpdate(req.params.id, mouseinstance, function(err, results) {
        if (err) {return console.log(err);}

        res.redirect('/storage');
      });

    }
  }

]

exports.storage_delete = [

  (req,res,next) => {
    if(req.params.product == 'keyboardinstance' && req.body.adminpassword == process.env.DB_CHANGEPASS) {
      KeyboardInstance.findByIdAndRemove(req.body.productid, function(err) {
        if (err) {return console.log(err);}

        res.redirect('/storage');
      })
    } else if (req.params.product == 'mouseinstance' && req.body.adminpassword == process.env.DB_CHANGEPASS) {
      MouseInstance.findByIdAndRemove(req.body.productid, function(err) {
        if (err) {return console.log(err);}

        res.redirect('/storage');
      });

  } else {
    res.redirect('/storage');
  }
}
]
