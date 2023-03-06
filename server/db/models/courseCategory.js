const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./course');

const CourseCategory = sequelize.define('course_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    category: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

CourseCategory.associate = (models) => {
    CourseCategory.hasMany(models.Course);
}

module.exports = CourseCategory;