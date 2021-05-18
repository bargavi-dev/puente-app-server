const Sequelize = require('sequelize');
const conn = new Sequelize(‘postgres://localhost/puente_db’);

module.exports = conn;