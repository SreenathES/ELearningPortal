const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;
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
        type: DataTypes.DECIMAL(5,2),
        allowNull: false
    }
});

CartItems.associate = (models) => {
    CartItems.belongsTo(models.Cart);
    CartItems.belongsTo(models.Course);
}

module.exports = CartItems;