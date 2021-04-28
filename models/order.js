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
    },

    address: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    phonenumber: {
      type: String,
      trim: true,
    },
    sex: {
      type: String,
      trim: true,
    },
    trainingType: {
      type: String,
      trim: true,
    },
    product: {
      type: ObjectId,
      ref: 'Product',
    },
    referenceId: {
      type: String,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
