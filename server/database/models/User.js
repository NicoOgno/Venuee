const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');


class User extends Model {}
User.init({
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'field username is empty'
      },
      isAlpha: {
        args: true,
        msg: 'username must be one word'
      },
      len: {
        args: [3, 20],
        msg: 'username length must be between 3 and 20 characters'
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: 'email is not valid'
      }
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'field password missing'
      },
      len: {
        args: [6, 150],
        msg: 'password must be at least 6 characters'
      }
    }
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true,
    len: {
      args: [2, 45],
      msg: 'company name length must be between 2 and 45 characters'
    }
  },
  userImg: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, { sequelize, modelName: 'user', timestamps: false });


module.exports = User;