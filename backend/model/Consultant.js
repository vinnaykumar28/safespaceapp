const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
    name: {
      type: String,
      require: [true, "Every consultant must have a name."],
      //unique: true,
      trim: true
    },
    email: {
      type: String,
      require: [true, "Every consultant must have an email."],
      unique: true,
      trim: true
    },
    speciality: {
      type: String,
      require: true,
      //unique: true,
      trim: true
    },
    workinghours: {
      type: String,
      select: false,
      require: true,
      //unique: true
    },
  });

const consultant = mongoose.model("Consultant", consultantSchema);
module.exports = consultant;
