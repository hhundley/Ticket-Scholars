// importing necessary modules
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const concertRoutes = require('./concertRoutes');

// setting up middlewate
router.use('/users', userRoutes);
router.use('/concerts',concertRoutes);

// exporting router
module.exports = router;