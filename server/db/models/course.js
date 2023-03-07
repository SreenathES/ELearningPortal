const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const CourseCategory = require('./courseCategory');
const Language = require('./languages');

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
    Course.belongsTo(models.course_category, { foreignKey: 'category_id' });
    Course.belongsTo(models.language, { foreignKey: 'language_id' });
    Course.belongsTo(models.user, { foreignKey: 'user_id' });
    Course.hasMany(models.course_content, { foreignKey: 'course_id' });
    Course.hasMany(models.certificate, { foreignKey: 'course_id' });
    Course.belongsToMany(models.user, { through: models.user_course_enrollment, foreignKey: 'course_id' });
    Course.hasMany(models.cart_items, { foreignKey: 'course_id' });
    Course.hasMany(models.user_course_feedback, { foreignKey: 'course_id' });
    Course.hasMany(models.user_course_progress, { foreignKey: 'course_id' });
}

module.exports = Course;