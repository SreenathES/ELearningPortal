require('dotenv').config();

module.exports = {
    MAIL_SETTINGS: {
        service: process.env.MAIL_SERVICE,
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        }
    }
};