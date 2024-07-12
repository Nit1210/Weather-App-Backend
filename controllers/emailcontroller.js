const emailService = require('../services/emailService');

const sendApiKeyExpiredEmail = async (req, res) => {
  try {
    await emailService.sendApiKeyExpiredEmail();
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
};

module.exports = {
  sendApiKeyExpiredEmail,
};
