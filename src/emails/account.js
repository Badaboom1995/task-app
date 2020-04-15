// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: "lordalurard@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: `Hello, ${name}`,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  sgMail.send(msg);
};
const sendCancelEmail = (email, name) => {
  const msg = {
    to: email,
    from: "lordalurard@gmail.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: `Good bbye, ${name}`,
    html: "<strong>and easy to do anywhere, even with Node.js</strong>"
  };
  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};
