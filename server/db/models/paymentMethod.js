const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;

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

module.exports = PaymentMethod;