const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const swaggerRoute = require('./swaggerRoute');

router.use('/auth', authRoutes);
router.use('/', swaggerRoute);

module.exports = router;
