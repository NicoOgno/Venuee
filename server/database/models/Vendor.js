const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Vendor extends Model {}
Vendor.init({
  vendorName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'field name is empty'
      },
      len: {
        args: [2, 45],
        msg: 'name length must be between 2 and 45 characters'
      }
    }
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'field address is missing'
      },
      len: {
        args: [2, 50],
        msg: 'address length must be between 2 and 50 characters'
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
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: {
        args: [2, 45],
        msg: 'company name length must be between 2 and 45 characters'
      },
      min: {
        args: 1,
        msg: 'capacity must be bigger than 0'
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
  vendorImg: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, { sequelize, modelName: 'vendor', timestamps: false });


module.exports = Vendor;