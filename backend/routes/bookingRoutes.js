const express = require('express');


// Import your booking controller (assuming you have a separate booking controller file)
const {
    getAllBookings,
    createBooking,
    updateBooking,
    deleteBooking

} = require("../controllers/bookingController")

const router = express.Router()

// Define routes and their corresponding route handlers
router.get('/',getAllBookings);

// router.post('/', createBooking);

// router.put('/:id', updateBooking);

// router.delete('/:id', deleteBooking);

// Export the router
module.exports = router;
