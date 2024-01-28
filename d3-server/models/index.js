const { Sequelize, DataTypes } = require('sequelize');
const db = {};

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    storage: './data/d3.sqlite',
});

const Person = sequelize.define('people', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    addressId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, { tableName: 'people' });

db.sequelize = sequelize;
db.Person = Person;

module.exports = db;