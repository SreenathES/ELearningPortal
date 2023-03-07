const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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

Cart.associate = (models) => {
    Cart.belongsTo(models.user, { foreignKey: 'user_id' });
    Cart.belongsToMany(models.course, { through: models.cart_items, foreignKey: 'cart_id' });
    Cart.hasMany(models.cart_items, { foreignKey: 'cart_id' });
    Cart.hasMany(models.payment, { foreignKey: 'cart_id' });
}

module.exports = Cart;