// Import necessary models and any other dependencies
const Booking = require("../model/bookingModel"); // Assuming you have a Booking model defined
const mongoose = require("mongoose")
// Controller functions for different booking-related operations

// Get all bookings
const getAllBookings = async (req, res) => {
   return res.json({mssg:"All the booking"})
};

// Create a new booking
// const createBooking = async (req, res) => {
 
// };

// Update a booking
// const updateBooking = async (req, res) => {
 

   
// };

// Delete a booking
// const deleteBooking = async (req, res) => {
 
// };

module.exports ={
    getAllBookings,
  
}