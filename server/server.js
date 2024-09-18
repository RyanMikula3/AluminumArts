const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Set up the transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // You can change this to another email service if needed
        auth: {
            user: 'peytonjackcarter@gmail.com', // Your Gmail address
            pass: 'YOUR_EMAIL_PASSWORD', // Make sure to use environment variables for sensitive information
        },
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: 'peytonjackcarter@gmail.com', // Change this to your new email address
        subject: `Contact Form Submission from ${name}`,
        text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
