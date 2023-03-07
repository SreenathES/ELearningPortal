const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Cart = require('./cart');
const Course = require('./course');

const CartItems = sequelize.define('cart_items', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cart,
            key: 'id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    amount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    }
});

CartItems.associate = (models) => {
    CartItems.belongsTo(models.cart, { foreignKey: 'cart_id' });
    CartItems.belongsTo(models.course, { foreignKey: 'course_id' });
}

module.exports = CartItems;