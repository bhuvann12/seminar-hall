const express = require('express');
const router = express.Router();
const {
    getAllHalls,
    createHall,
    updateHall,
    deleteHall
} = require('../controllers/hallController');

// Define routes and their corresponding route handlers
router.get('/',getAllHalls);

router.post('/', createHall);

router.put('/:id', updateHall);

router.delete('/:id', deleteHall);

// Export the router
module.exports = router;
