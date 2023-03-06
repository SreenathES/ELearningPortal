const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }
});

Role.associate = (models) => {
    Role.belongsToMany(models.User, { through: models.UserRole, foreignKey: 'role_id' });
    Role.hasMany(models.UserRole);   
}

module.exports = Role;