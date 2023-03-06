const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;
const User = require('./user');
const Course = require('./course');

const UserCourseFeedback = sequelize.define('user_course_feedback', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    feedback: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    reply: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Course,
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
    }
});

UserCourseFeedback.associate = (models) => {
    UserCourseFeedback.belongsTo(models.User);
    UserCourseFeedback.belongsTo(models.Course);
}

module.exports = UserCourseFeedback;