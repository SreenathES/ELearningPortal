const loginService = require('../services/loginService');

const login = async (req, res) => {
    try {
        const serviceResponse = await loginService.login(req.body);
        if (!serviceResponse.isValid) {
            return res.status(serviceResponse.statusCode).json(serviceResponse);
        }

        return res.status(serviceResponse.statusCode).json(serviceResponse);
    } catch (err) {
        return res.status(500).json({ errors: { error: 'Internal server error' } });
    }
}

module.exports = {
    login
};