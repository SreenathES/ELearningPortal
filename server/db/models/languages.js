const { DataTypes } = require('sequelize');
const sequelize = require('../config/db').sequelize;

const Language = sequelize.define('language', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    language: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
});

Language.associate = (models) => {
    Language.hasMany(models.Course);
}

module.exports = Language;