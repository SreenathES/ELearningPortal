const joi = require('joi');

/**
 * Validates the input data for the login service
 * @param {*} data - An object containing user login credentials (email and password)
 * @returns A Joi validation result object
 */
const validateLoginData = (data) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    });
    return schema.validate(data, { abortEarly: false });
}

module.exports = {
    validateLoginData
};