const ServiceResponse = require("../utils/serviceResponse");
const { validateLoginData } = require("../validators/authValidator");

const validateLogin = (req, res, next) => {
    const response = new ServiceResponse();

    // Validate the input data using joi validator.
    const { error } = validateLoginData(req.body);
    if (error) {
        response.statusCode = 400;
        error.details.forEach((detail) => {
            const key = detail.path[0];
            const message = detail.message;
            response.addError(key, message);
        });
        return res.status(response.statusCode).json(response.errors);
    }

    return next();
}

module.exports = {
    validateLogin
}