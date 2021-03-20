const express = require('express');
const router = express.Router();
const {
  create,
  productById,
  read,
  remove,
  update,
  list,
  listRelated,
  listCategories,
  listBySearch,
  photo,
  listSearch,
  listByCat,
  Listread,
} = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');
router.get('/products/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  '/product/:productId/:userId',
  requireSignin,
  isAuth,
  isAdmin,
  update
);
router.get('/products', list);
router.get('/products/shop/list/:listCat', Listread);
router.get('/products/search', listSearch);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories/list', listCategories);
router.post('/products/by/search/:PID', listBySearch);
router.get('/product/photo/:productId', photo);



router.param('userId', userById);

router.param('productId', productById);
router.param('listCat', listByCat);
module.exports = router;
