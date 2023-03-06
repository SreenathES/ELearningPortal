const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;
const User = require('./user');
const Course = require('./course');

const UserCourseEnrollment = sequelize.define('user_course_enrollment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('Enrolled', 'In Progress', 'Completed'),
        defaultValue: 'Enrolled'
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
    }
});

UserCourseEnrollment.associate = (models) => {
    UserCourseEnrollment.belongsTo(models.User);
    UserCourseEnrollment.belongsTo(models.Course);
}

module.exports = UserCourseEnrollment;