const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      trim: true,
      required: true,
    },

    category: {
      type: ObjectId,
      ref: 'Category',
      required: true,
    },

    sold: {
      type: Number,
      default: 0,
    },

    photo: {
      data: Buffer,
      contentType: String,
    },

    timeLine: {
      type: String,
      maxlength: 2000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
