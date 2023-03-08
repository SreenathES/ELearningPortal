const nodemailer = require('nodemailer');
const { MAIL_SETTINGS } = require('../constants/constants');
const transporter = nodemailer.createTransport(MAIL_SETTINGS);

const sendMail = async (params) => {
	try {
		let info = await transporter.sendMail({
			from: MAIL_SETTINGS.auth.user,
			to: params.to,
			subject: 'myLearn: One-time password for account verification',
			html: `
				<div style="max-width: 600px; margin: 0 auto; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); border-radius: 5px;">
					<div style="background-color: #ffffff; padding: 20px; border-radius: 5px 5px 0 0;">
					<h2 style="margin: 0; font-size: 24px;">One Time Password</h2>
					</div>
					<div style="background-color: #f7f7f7; padding: 20px; border-radius: 0 0 5px 5px;">
					<p style="margin: 0 0 20px 0;">Dear ${params.name},</p>
					<p style="margin: 0 0 20px 0;">Please use the following One Time Password to complete your login:</p>
					<div style="display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; color: #2d2d2d; border: 2px solid #2d2d2d; padding: 10px; border-radius: 5px;">
						${params.OTP}
					</div>
					<p style="margin: 20px 0 0 0;">This OTP is valid for ${process.env.OTP_EXPIRY_DURATION} minutes. Please do not share this OTP with anyone.</p>
					</div>
				</div>
      		`,
		});
		return info;
	} catch (error) {
		console.log(error);
		return false;
	}
};

module.exports = {
	sendMail
}