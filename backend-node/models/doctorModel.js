const mongoose = require('mongoose');

const timeSlotSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  bookingStatus: {
    type: Boolean,
    default: false, // Assuming the default booking status is false (not booked)
  },
});

const doctorSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  qualifications: {
    type: [String], // Assuming an array of degree names
  },
  timeSlots: {
    type: [timeSlotSchema], // Array of timeSlotSchema objects
  },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;