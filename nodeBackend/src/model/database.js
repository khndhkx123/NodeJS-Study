var Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node', // Database
    'root', // User
    'kioni', // Password
    {
        host: 'localhost',
        port: 1118,
        dialect: 'mysql'
    }
);

module.exports = sequelize;