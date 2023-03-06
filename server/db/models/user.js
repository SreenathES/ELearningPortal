const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;

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
    User.hasMany(models.Course);
    User.hasOne(models.UserDetails);
    User.hasMany(models.Otp);
    User.belongsToMany(models.Role, { through: models.UserRole, foreignKey: 'user_id' });
    User.hasMany(models.UserRole);
    User.hasMany(models.Certificate);
    User.belongsToMany(models.Course, { through: models.UserCourseEnrollment, foreignKey: 'user_id' });
    User.hasMany(models.UserCourseEnrollment);
    User.hasMany(models.Cart);
    User.hasMany(models.Payment);
    User.hasMany(models.UserCourseFeedback);
    User.hasMany(models.UserCourseProgress);
}

module.exports = User;