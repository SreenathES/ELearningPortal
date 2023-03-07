const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Course = require('./course');
const CourseContent = require('./courseContent');

const UserCourseProgress = sequelize.define('user_course_progress', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CourseContent,
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
            key: 'id'
        }
    },
    completed: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

UserCourseProgress.associate = (models) => {
    UserCourseProgress.belongsTo(models.course, { foreignKey: 'course_id' });
    UserCourseProgress.belongsTo(models.user, { foreignKey: 'user_id' });
    UserCourseProgress.belongsTo(models.course_content, { foreignKey: 'course_content_id' });
}

module.exports = UserCourseProgress;