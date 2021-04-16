const express = require('express');
const router = express.Router();



const {
  create,
  update,
  careById,
  emailAdmin,
  emailUser,
} = require('../controllers/care');




router.post('/care/create', create);

router.put('/care/update/:careId',  update);

router.get('/care/email/:careId', emailAdmin);

router.get('/care/emailUser/:careId', emailUser);



router.param('careId', careById);


module.exports = router;
