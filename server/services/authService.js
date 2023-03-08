const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwtHelper');
const { validateLoginData, validateStudentData } = require('../validators/authValidator');
const db = require('../db/models/index');
const ServiceResponse = require('../utils/serviceResponse');

/**
 * Login service
 * @param {object} data - An object containing user login credentials (email and password).
 * @returns {object} An object containing the authenticated user's information and a JWT
 *          or rejects with a ServiceResponse object containing any errors that occurred during the login process.
 */
const login = async (data) => {
    const response = new ServiceResponse();

    // Validate the input data using joi validator.
    const { error, value } = validateLoginData(data);
    if (error) {
        error.details.forEach((detail) => {
            const key = detail.path[0];
            const message = detail.message;
            response.addError(key, message);
        });
        response.statusCode = 400;
        return response;
    }

    try {
        // Find the user with specified email address.
        const user = await db.user.findOne({
            where: { email: value.email },
            include: [{ model: db.role, as: 'roles' }]
        });
        if (!user) {
            response.addError('email', 'Invalid email or password');
            response.statusCode = 400;
            return response;
        }

        // Compare the provided password with hash stored in the database.
        const isMatch = await bcrypt.compare(value.password, user.password);
        if (!isMatch) {
            response.addError('password', 'Invalid email or password');
            response.statusCode = 400;
            return response;
        }

        // Generate token and return result
        const token = createToken({ id: user.id, firstName: user.first_name, email: user.email });
        response.result = {
            firstName: user.first_name,
            lastName: user.last_name,
            role: user.roles[0].role,
            token
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

    // Validate input data using joi validator.
    const { error, value } = validateStudentData(data);
    if (error) {
        error.details.forEach((detail) => {
            const key = detail.path[0];
            const message = detail.message;
            response.addError(key, message);
        });
        response.statusCode = 400;
        return response;
    }

    try {
        // Find the user with specified email address.
        const user = await db.user.findOne({
            where: { email: value.email }
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
        const hash = bcrypt.hashSync(value.password, parseInt(process.env.SALT_ROUNDS));

        // Insert student information into user table.
        const createStudent = await db.user.create({
            first_name: value.firstName,
            last_name: value.lastName,
            phone: value.phone,
            email: value.email,
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