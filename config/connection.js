require('dotenv').config()

const Sequelize = require('sequelize')

// const sequelize = new Sequelize(process.env.JAWSDB_URL ? process.env.JAWSDB_URL : process.env.LOCALDB_URL)

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/ecommerce_db')

module.exports = sequelize
