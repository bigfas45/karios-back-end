const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const careSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    dob: {
      type: String,
    },
    telephone: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    gender: {
      type: String,
    },
    certificate: {
      type: String,
    },
    IELTS: {
      type: String,
    },
    Nurse: {
      type: String,
    },
    NMC: {
      type: String,
    },
    CBT: {
      type: String,
    },
    discipline: {
      type: String,
    },
    experience: {
      type: String,
    },
    workingNurse: {
      type: String,
    },
    department: {
      type: String,
    },
    relation: {
      type: String,
    },
    notice: {
      type: String,
    },

    expiresAt: {
      type: mongoose.Schema.Types.Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Care', careSchema);
