// importing necessary modules
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// setting up middleware
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// exporting router
module.exports = router;