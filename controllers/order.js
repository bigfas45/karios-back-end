const Order  = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.orderById = (req, res, next, id) => {
  Order.findById(id)
    .populate('products.product', 'name price')
    .exec((err, order) => {
      if (err || !order) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      req.order = order;
      next();
    });
};

exports.orderByRef = (req, res, next, id) => {
  Order.find({ referenceId: id })
    .populate('product', 'name price')
    .exec((err, order) => {
      if (err || !order) {
        return res.status(400).json({
          err,
        });
      }
      req.order = order;
      next();
    });
};

exports.read = (req, res) => {
 
  return res.json(req.order);
};

exports.create = (req, res) => {
  console.log('CREATE ORDER: ', req.body);
  const {
    lastname,
    firstname,
    email,
    companyname,
    address,
    city,
    phonenumber,
    sex,
    trainingType,
    product,
    referenceId,
  } = req.body;

  if (
    !lastname ||
    !firstname ||
    !email ||
    !companyname ||
    !address ||
    !city ||
    !phonenumber ||
    !sex ||
    !trainingType ||
    !product ||
    !referenceId
  ) {
    return res.status(400).json({
      error: 'All fields are required',
    });
  }

  const order = new Order(req.body);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
       err
      });
    }

    res.json({
      order,
    });
  });
};

exports.listOrders = (req, res) => {
  Order.find()
    .populate('user', '_id name address')
    .sort('-created')
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error),
        });
      }
      res.json(orders);
    });
};

exports.getStatusValues = (req, res) => {
  res.json(Order.schema.path('status').enumValues);
};

exports.updateOrderStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(order);
    }
  );
};
