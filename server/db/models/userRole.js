const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Role = require('./role');

const UserRole = sequelize.define('user_role', {
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
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Role,
            key: 'id'
        }
    }
});

UserRole.associate = (models) => {
    UserRole.belongsTo(models.user, { foreignKey: 'user_id' });
    UserRole.belongsTo(models.role, { foreignKey: 'role_id' });
}

module.exports = UserRole;