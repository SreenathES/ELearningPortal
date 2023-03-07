const bcrypt = require('bcrypt');
const { createToken } = require('../utils/jwtHelper');
const { validateLoginData } = require('../validators/loginValidator');
const db = require('../db/models/index');
const ServiceResponse = require('../utils/serviceResponse');

/**
 * Login service
 * @param {*} data - An object containing user login credentials (email and password).
 * @returns An object containing the authenticated user's information and a JWT
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

module.exports = {
    login
};