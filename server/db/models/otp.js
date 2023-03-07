const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
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

Otp.associate = (models) => {
    Otp.belongsTo(models.user, { foreignKey: 'user_id' });
}

module.exports = Otp;