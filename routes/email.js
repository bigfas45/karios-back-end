const express = require("express");
const router = express.Router();

const {mail} = require("../controllers/email");

const {
  orderById,
} = require('../controllers/order');



router.get('/mail/order/:orderId', mail);




router.param('orderId', orderById);

module.exports = router;
