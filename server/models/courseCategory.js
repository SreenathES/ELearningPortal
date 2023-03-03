const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;

const CourseCategory = sequelize.define('course_category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_category: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
});

module.exports = CourseCategory;