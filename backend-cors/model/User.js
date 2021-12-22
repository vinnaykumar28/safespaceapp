const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      require: [true, "Every user has to have a unique username."],
      unique: true,
      trim: true
    },
    email: {
      type: String,
      require: [true, "Every users has to have an email."],
      unique: true,
      trim: true
    },
    address: {
      type: String,
      require: false,
      //unique: true,
      trim: true
    },
    password: {
      type: String,
      require: [true, "A password is a must-have nowadays."],
      //unique: true,
    },
  });

const user = mongoose.model("User", userSchema);
module.exports = user;
