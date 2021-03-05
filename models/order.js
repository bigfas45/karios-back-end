const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema(
  {
    lastname: {
      type: String,
      trim: true,
      required: true,
    },

    firstname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },

    companyname: {
      type: String,
      trim: true,
      required: true,
    },

    address: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    phonenumber: {
      type: String,
      trim: true,
      required: true,
    },
    sex: {
      type: String,
      trim: true,
      required: true,
    },
    trainingType: {
      type: String,
      trim: true,
      required: true,
    },
    product: {
      type: ObjectId,
      ref: 'Product',
      required: true,
    },
    referenceId: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
