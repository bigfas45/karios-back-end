const Order = require('../models/order');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.orderById = (req, res, next, id) => {
  Order.findById(id)
    .populate('product', 'name price')
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


exports.listOrdersId = (req, res) => {
   var id = req.params.id;
  Order.find({ referenceId: id })
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
        err,
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

exports.update = (req, res) => {
  console.log(req.order._id);
  Order.findOne(
    {
      _id: req.order._id,
    },
    (err, order) => {
      if (err || !order) {
        return res.status(400).json({ error: 'Payment not found' });
      }
      order.status = 1;
      order.save((err, updatedOrder) => {
        if (err) {
          console.log('PAYMENT UPDATE ERROR', err);
          return res.status(400).json({ error: 'Payment update failed' });
        }
        res.json(updatedOrder);
      });
    }
  );
};

exports.listRelated = (req, res) => {
  console.log(req.product._id);
  Order.find({ product: req.product._id })
    .populate('product', '-photo')
    .select('-file')
    .exec((err, orders) => {
      if (err) {
        return res.status(400).json({
          error: 'orders not found',
        });
      }
      res.json(orders);
    });
};
