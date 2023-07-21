const mongoose = require('mongoose');
const Schema = mongoose.Schema
// Define the schema for the Booking model
const bookingSchema = new Schema({
  hall: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hall',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
});

// Create the Booking model based on the schema
const Booking = mongoose.model('Booking', bookingSchema);

// Export the Booking model
module.exports = Booking;
