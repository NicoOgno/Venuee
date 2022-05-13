const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class User extends Model {}
User.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'field name is empty'
      },
      isAlpha: {
        args: true,
        msg: 'name must be letters only'
      },
      len: {
        args: [3, 15],
        msg: 'name length must be between 3 and 15 characters'
      }
    }
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'field last name is empty'
      },
      isAlpha: {
        args: true,
        msg: 'last name must be letters only'
      },
      len: {
        args: [2, 15],
        msg: 'last name length must be between 2 and 15 characters'
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