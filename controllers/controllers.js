const weatherService = require('../services/weatherService');
const emailService = require('../services/emailService');
const { apiKey } = require('../config/config');

const getWeather = async (req, res) => {
  try {
    const { city } = req.query;
    const weatherData = await weatherService.getCityWeather(city, apiKey);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
    await emailService.sendApiKeyExpiredEmail();
  }
};

module.exports = {
  getWeather,
};
