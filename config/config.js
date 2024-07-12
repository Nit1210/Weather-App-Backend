require('dotenv').config();

module.exports = {
  apiKey: process.env.WEATHER_API_KEY,
  port: process.env.PORT || 3000,
  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};
