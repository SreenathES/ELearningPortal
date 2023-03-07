const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user');
const Course = require('./course');

const Certificate = sequelize.define('certificate', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    certificate_link: {
        type: DataTypes.STRING,
        allowNull: false
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

Certificate.associate = (models) => {
    Certificate.belongsTo(models.user, { foreignKey : 'user_id' });
    Certificate.belongsTo(models.course, { foreignKey : 'course_id' });
}

module.exports = Certificate;