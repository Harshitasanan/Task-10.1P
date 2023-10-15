const express = require('express');
const bodyParser = require('body-parser');
const mailgun = require('mailgun-js');
const app = express();
const port = process.env.PORT || 3000;

const api_key = 'f26f*****';
const domain = 'san************';
const mg = mailgun({ apiKey: api_key, domain: domain });

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { email } = req.body;

  // Sending email using Mailgun
  const mailData = {
    from: 'Excited User <harshita.sanan20@gmail.com>',
    to: email,
    subject: 'Welcome Email Mailgun....!',
    text: 'Testing some Mailgun awesomeness!'
  };

  mg.messages().send(mailData, (error, body) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Email sending failed' });
    } else {
      console.log(body);
      res.json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
