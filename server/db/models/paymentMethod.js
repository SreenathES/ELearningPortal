const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PaymentMethod = sequelize.define('payment_method', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    method: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

PaymentMethod.associate = (models) => {
    const Payment = require('./payment');

    PaymentMethod.hasMany(models.Payment);
}

module.exports = PaymentMethod;