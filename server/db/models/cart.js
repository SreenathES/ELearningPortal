const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;
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
    Cart.belongsTo(models.User);
    Cart.belongsToMany(models.Course, { through: models.CartItems, foreignKey: 'cart_id' });
    Cart.hasMany(models.CartItems, { foreignKey: 'cart_id' });
    Cart.hasMany(models.Payment);
}

module.exports = Cart;