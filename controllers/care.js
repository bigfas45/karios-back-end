const Care = require('../models/care');
const { errorHandler } = require('../helpers/dbErrorHandler');



exports.careById = (req, res, next, id) => {
  Care.findById(id).exec((err, care) => {
    if (err || !care) {
      return res.status(400).json({
        error: 'care does not exsit',
      });
    }
    req.care = care;
    next();
  });
};

exports.create = (req, res) => {

  const care = new Care(req.body);
  care.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};


exports.update = (req, res) => {
  const care = req.care;
  care.name = req.body.name;
  care.dob = req.body.dob;
  care.telephone = req.body.telephone;
  care.email = req.body.email;
  care.gender = req.body.gender;
  care.certificate = req.body.certificate;
  care.expiresAt = req.body.expiresAt;
  care.IELTS = req.body.IELTS;
  care.Nurse = req.body.Nurse;
  care.NMC = req.body.NMC;
  care.CBT = req.body.CBT;
  care.discipline = req.body.discipline;
  care.experience = req.body.experience;
  care.workingNurse = req.body.workingNurse;
  care.department = req.body.department;
  care.relation = req.body.relation;
  care.notice = req.body.notice;

  care.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};
