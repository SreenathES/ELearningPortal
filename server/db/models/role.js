const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    Role.belongsToMany(models.user, { through: models.user_role, foreignKey: 'role_id' });
    Role.hasMany(models.user_role, { foreignKey: 'role_id' });
}

module.exports = Role;