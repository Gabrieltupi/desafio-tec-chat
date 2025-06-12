'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
  
    
    static associate(models) {

    }
  }
  Message.init({
    content: DataTypes.TEXT,
    isUser: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};