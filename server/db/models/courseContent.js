const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Course = require('./course');

const CourseContent = sequelize.define('course_content', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    duration: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    video_link: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    }
});

CourseContent.associate = (models) => {
    CourseContent.belongsTo(models.course, { foreignKey: 'course_id' });
    CourseContent.hasMany(models.user_course_progress, { foreignKey: 'course_content_id' });
}

module.exports = CourseContent;