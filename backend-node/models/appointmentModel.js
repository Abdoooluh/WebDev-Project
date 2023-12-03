const mongoose = require('mongoose')

const Schema = mongoose.Schema

const appointmentSchema = new Schema({
  patient: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  appointmentdate: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('appointment', appointmentSchema)