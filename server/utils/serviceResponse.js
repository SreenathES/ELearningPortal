class ServiceResponse {
    errors = [];
    isValid = true;
    result = null;
    statusCode = 0;

    constructor() {
        this.errors = {};
    }

    addError(key, value) {
        this.isValid = false;

        if (Object.prototype.hasOwnProperty(key)) {
            this.errors[key].push(value);
        } else {
            this.errors[key] = value;
        }
    }
}

module.exports = ServiceResponse;