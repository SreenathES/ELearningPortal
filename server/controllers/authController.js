const authService = require('../services/authService');

const login = async (req, res) => {
    try {
        const serviceResponse = await authService.login(req.body);
        if (!serviceResponse.isValid) {
            return res.status(serviceResponse.statusCode).json({ errors: serviceResponse.errors });
        }

        return res.status(serviceResponse.statusCode).json({ result: serviceResponse.result });
    } catch (err) {
        return res.status(500).json({ errors: { server: 'Internal server error' } });
    }
}

module.exports = {
    login
};