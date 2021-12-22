const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  bookingBy: {
    type: String,
    require: true,
    //unique: false,
    trim: true
  },
    bookingTime: {
      type: String,
      require: true,
      unique: true,
      trim: true
    },
    patientName: {
      type: String,
      select: false,
      require: true,
      //unique: true,
      trim: true
    },
    ConsultantName: {
      type: String,
      require: true,
      //unique: true,
      trim: true
    },
    confirmation: {
      type: Boolean,
      require: true,
      //unique: true,
      trim: true
    },
  });

const booking = mongoose.model("Booking", bookingSchema);
module.exports = booking;
