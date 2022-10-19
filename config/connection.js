// import Sequelize construct from the library
const Sequelize = require('sequelize');
require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASSWORD } = process.env
let sequelize;

// create connection to database, passing in your MySQL info 
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
}

module.exports = sequelize;