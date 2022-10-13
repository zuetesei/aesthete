// import Sequelize construct from the library
const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to database, passing in your MySQL info 
const sequelize = new Sequelize('aesthete_db', 'root', '672island!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;