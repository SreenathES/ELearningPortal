const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Payment = require('./payment');

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
    PaymentMethod.hasMany(models.Payment);
}

module.exports = PaymentMethod;