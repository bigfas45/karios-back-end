const express = require('express');
const router = express.Router();



const { create, update, careById } = require('../controllers/care');




router.post('/care/create', create);

router.put(
  '/care/:careId',

  update
);





router.param('careId', careById);


module.exports = router;
