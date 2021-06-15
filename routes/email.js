const express = require('express');
const router = express.Router();

const { mail, mailContactForm } = require('../controllers/email');

const { orderById } = require('../controllers/order');

const { contactById } = require('../controllers/contactForm');

router.get('/mail/order/:orderId', mail);
router.get('/mail/contactFrom/:contactId', mailContactForm);

router.param('orderId', orderById);
router.param('contactId', contactById);

module.exports = router;
