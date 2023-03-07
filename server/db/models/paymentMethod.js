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
    PaymentMethod.hasMany(models.payment, { foreignKey: 'payment_method_id' });
}

module.exports = PaymentMethod;