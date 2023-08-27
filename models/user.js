const {DataTypes} = require('sequelize')
const sequelize = require('../config/sequelize')

const User = sequelize.define('User',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    }
});

module.exports = User;