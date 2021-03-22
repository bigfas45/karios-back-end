const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const {  userById } = require("../controllers/user");
const {
  create,
  listOrders,
  orderById,
  orderByRef,
  read,
  update,
} = require('../controllers/order');


router.post('/order/create',  create);

router.get('/order/list/:orderRef', read);


router.put('/order/update/:orderRef', update);


router.param('userId', userById);


router.param('orderId', orderById);

router.param('orderRef', orderByRef);


module.exports = router