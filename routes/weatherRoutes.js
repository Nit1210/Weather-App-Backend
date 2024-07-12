const express = require('express');
const weatherController = require('../controllers/controllers');

const router = express.Router();

router.get('/weather', weatherController.getWeather);

module.exports = router;
