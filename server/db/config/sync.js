require('dotenv').config();
const sequelize = require('./db');

sequelize.sync({alter: true});