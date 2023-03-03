const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;
const User = require('./user');

const Otp = sequelize.define('otp', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    otp_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    purpose: {
        type: DataTypes.ENUM('Login', 'ForgotPassword'),
        allowNull: false
    },
    expiry: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
});

module.exports = Otp;