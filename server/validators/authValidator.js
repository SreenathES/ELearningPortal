const joi = require('joi');

/**
 * Validates the input data for the login service.
 * @param {object} data - An object containing user login credentials (email and password).
 * @returns {object} A Joi validation result object.
 */
const validateLoginData = (data) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });
    return schema.validate(data, { abortEarly: false });
}

/**
 * Validates the input data for the student registration service.
 * @param {object} data - An object containing student's first name, last name, email, phone and password.
 * @returns {object} A Joi validation result object.
 */
const validateStudentRegistration = (data) => {
    const schema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string(),
        phone: joi.string().trim().length(10).pattern(/^[0-9]+$/),
        email: joi.string().email().required(),
        password: joi.string().required()
    });
    return schema.validate(data, { abortEarly: false });
}

module.exports = {
    validateLoginData,
    validateStudentRegistration
};