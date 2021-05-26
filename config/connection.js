require('dotenv').config();

const mysql = require("mysql");
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, 
 process.env.DB_USER, 
process.env.DB_PW, 
   {
 host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
    decimalNumbers: true,
   },
   });
const connection = mysql.createConnection({
  // Your username
  user: "root",
  // Your password
  password: "794166dj",
  database: "ecommerce"
});

connection.connect();

module.exports = connection;
module.exports = sequelize;
