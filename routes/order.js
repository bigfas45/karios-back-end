const express = require('express');
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
const {
  create,
  listOrders,
  orderById,
  orderByRef,
  read,
  update,
  listRelated,
  listOrdersId,
  listRelated2,
  updateHook
} = require('../controllers/order');
const { productById } = require('../controllers/product');

router.post('/order/create', create);

router.get('/order/id/:id', listOrdersId);

router.get('/order/list/:orderRef', read);
router.get('/order/related/:projectId', listRelated);
router.get('/order/related2/:projectId', listRelated2);

router.put('/order/update/:orderId', update);

router.put('/order/webhook/', updateHook);

router.param('userId', userById);
router.param('orderId', orderById);
router.param('orderRef', orderByRef);
router.param('projectId', productById);

module.exports = router;
