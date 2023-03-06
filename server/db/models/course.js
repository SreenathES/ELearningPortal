const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const CourseCategory = require('./courseCategory');
const Language = require('./languages');
const CourseContent = require('./courseContent');
const Certificate = require('./certificate');
const Cart = require('./cart');
const UserCourseEnrollment = require('./userCourseEnrollment');
const CartItems = require('./cartItems');
const UserCourseFeedback = require('./userCourseFeedback');
const UserCourseProgress = require('./userCourseProgress');

const Course = sequelize.define('course', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    meta_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    featured_image_link: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    language_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Language,
            key: 'id'
        }
    },
    detailed_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Draft', 'Approved', 'Rejected', 'Removed'),
        defaultValue: 'Draft'
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CourseCategory,
            key: 'id'
        }
    },
    total_sessions: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

Course.associate = (models) => {
    Course.belongsTo(models.CourseCategory);
    Course.belongsTo(models.Language);
    Course.belongsTo(models.User);
    Course.hasMany(models.CourseContent);
    Course.hasMany(models.Certificate);
    Course.belongsToMany(models.User, { through: models.UserCourseEnrollment, foreignKey: 'course_id' });
    Course.belongsToMany(models.Cart, { through: models.CartItems, foreignKey: 'course_id' });
    Course.hasMany(models.CartItems);
    Course.hasMany(models.UserCourseFeedback);
    Course.hasMany(models.UserCourseProgress);
}

module.exports = Course;