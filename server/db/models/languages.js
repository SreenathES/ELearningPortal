const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    Language.hasMany(models.course, { foreignKey: 'language_id' });
}

module.exports = Language;