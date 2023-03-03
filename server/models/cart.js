const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;
const User = require('./user');

const Cart = sequelize.define('cart', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.ENUM('Active', 'Completed', 'Expired'),
        allowNull: false,
        defaultValue: 'Active'
    }
});

module.exports = Cart;