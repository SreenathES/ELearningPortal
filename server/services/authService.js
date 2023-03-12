const bcrypt = require('bcrypt');
const { generateOtp } = require('../utils/otpGenerator');
const { validateLoginData, validateStudentData } = require('../validators/authValidator');
const db = require('../db/models/index');
const Op = db.Sequelize.Op;
const ServiceResponse = require('../utils/serviceResponse');
const { sendMail } = require('./mailService');

/**
 * Login service
 * @param {object} data - An object containing user login credentials (email and password).
 * @returns {object} An object containing the authenticated user's information and a JWT
 *          or rejects with a ServiceResponse object containing any errors that occurred during the login process.
 */
const login = async (data) => {
    const response = new ServiceResponse();

    try {
        // Find the user with specified email address.
        const user = await db.user.findOne({
            where: { email: data.email },
            include: [{ model: db.role, as: 'roles' }]
        });
        if (!user) {
            response.addError('email', 'Invalid email or password');
            response.statusCode = 400;
            return response;
        }

        // Compare the provided password with hash stored in the database.
        const isMatch = await bcrypt.compare(data.password, user.password);
        if (!isMatch) {
            response.addError('password', 'Invalid email or password');
            response.statusCode = 400;
            return response;
        }

        // Check if there is an active OTP for the user.
        const existingOTP = await db.otp.findOne({
            where: {
                user_id: user.id,
                expiry: { [Op.gt]: new Date() }
            }
        });
        if (existingOTP) {
            // If there is an existing otp for the user, then send otp to user's mail.
            const resendOtp = await sendMail({
                name: user.first_name,
                to: user.email,
                OTP: existingOTP.otp_code
            });
            if (!resendOtp) {
                response.addError('otp', 'Cannot send otp, try again later');
                response.statusCode = 500;
                return response;
            }

            response.result = {
                message: 'OTP has been sent to your email',
                userId: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                role: user.roles[0].role,
                email: user.email
            }
            response.statusCode = 200;
            return response;
        }

        // Generate an OTP and save it to the database.
        const otp = generateOtp();
        const otpExpiry = new Date(Date.now() + process.env.OTP_EXPIRY_DURATION * 60 * 1000);
        await db.otp.create({
            user_id: user.id,
            otp_code: otp,
            expiry: otpExpiry,
            purpose: 'Login'
        });

        // Sending otp to user's mail.
        const sendOtp = await sendMail({
            name: user.first_name,
            to: user.email,
            OTP: otp
        });

        if (!sendOtp) {
            response.addError('otp', 'Cannot send otp, try again later');
            response.statusCode = 500;
            return response;
        }

        response.result = {
            message: 'OTP has been sent to your email',
            userId: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            role: user.roles[0].role,
            email: user.email
        };
        response.statusCode = 200;
        return response;
    } catch (err) {
        response.addError('error', err);
        response.statusCode = 500;
        return response;
    }
}

/**
 * Registers a new student account with the provided data.
 * 
 * @param {object} data An object containing student's first name, last name, email, phone and password.
 * @returns {object} An object with the newly created student account information or rejects with a 
 * ServiceResponse object containing any errors that occurred during the registration process.
 */
const registerStudent = async (data) => {
    const response = new ServiceResponse();

    try {
        // Find the user with specified email address.
        const user = await db.user.findOne({
            where: { email: data.email }
        });
        if (user) {
            response.addError('account', 'User already exists');
            response.statusCode = 409;
            return response;
        }

        // Fetch role_id of student.
        const role = await db.role.findOne({
            where: { role: 'student' }
        })
        if (!role) {
            response.addError('role', 'Role not found');
            response.statusCode = 404;
            return response;
        }

        // Hashing the plain text password entered by the user.
        const hash = bcrypt.hashSync(data.password, parseInt(process.env.SALT_ROUNDS));

        // Insert student information into user table.
        const createStudent = await db.user.create({
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            email: data.email,
            password: hash
        })

        // Assigning role to the student.
        await db.user_role.create({
            user_id: createStudent.id,
            role_id: role.id
        });

        response.result = createStudent;
        response.statusCode = 200;
        return response;
    } catch (err) {
        response.addError('error', err);
        response.statusCode = 500;
        return response;
    }
}

module.exports = {
    login,
    registerStudent
};