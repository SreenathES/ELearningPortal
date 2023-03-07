const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Cart = require('./cart');
const PaymentMethod = require('./paymentMethod')

const Payment = sequelize.define('payment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PaymentMethod,
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    transaction_id: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cart,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('Paid', 'Failed', 'Pending'),
        defaultValue: 'Pending'
    }
});

Payment.associate = (models) => {
    Payment.belongsTo(models.payment_method, { foreignKey: 'payment_method_id' });
    Payment.belongsTo(models.cart, { foreignKey: 'cart_id' });
    Payment.belongsTo(models.user, { foreignKey: 'user_id' });
}
module.exports = Payment;