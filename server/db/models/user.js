const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(13),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
});

User.associate = (models) => {
    User.hasMany(models.course, { foreignKey: 'user_id' });
    User.hasOne(models.user_details, { foreignKey: 'user_id' });
    User.hasMany(models.otp, { foreignKey: 'user_id' });
    User.belongsToMany(models.role, { through: models.user_role, foreignKey: 'user_id' });
    User.hasMany(models.user_role, { foreignKey: 'user_id' });
    User.hasMany(models.certificate, { foreignKey: 'user_id' });
    User.belongsToMany(models.course, { through: models.user_course_enrollment, foreignKey: 'user_id' });
    User.hasMany(models.user_course_enrollment, { foreignKey: 'user_id' });
    User.hasMany(models.cart, { foreignKey: 'user_id' });
    User.hasMany(models.payment, { foreignKey: 'user_id' });
    User.hasMany(models.user_course_feedback, { foreignKey: 'user_id' });
    User.hasMany(models.user_course_progress, { foreignKey: 'user_id' });
}

module.exports = User;