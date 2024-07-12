const nodemailer = require('nodemailer');
const { emailService, emailUser, emailPass } = require('../config/config');

const transporter = nodemailer.createTransport({
  service: emailService,
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

const sendApiKeyExpiredEmail = async () => {
  const mailOptions = {
    from: emailUser,
    to: 'admin@example.com',  // Change to the desired email recipient
    subject: 'Weather API Key Expired',
    text: 'The Weather API key has expired. Please update it as soon as possible.',
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  sendApiKeyExpiredEmail,
};
