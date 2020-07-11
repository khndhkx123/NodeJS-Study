var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node', // Database
    'root', // User
    'root', // Password
    {
        host: 'localhost:3306',
        dialect: 'mysql'
    }
);

module.exports = sequelize;