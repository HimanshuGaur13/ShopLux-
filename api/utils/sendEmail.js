const nodemailer = require("nodemailer");

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // host: process.env.HOST,
            service: 'outlook',
            // port: 465,
            // secure: true,
            auth: {
                user:'hgaur13619@outlook.com',
                pass: 'XGAUR136191'
            },
        });

        await transporter.sendMail({
            from: 'hgaur13619@outlook.com',
            to: email,
            subject: subject,
            text: text,
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};

module.exports = sendEmail;