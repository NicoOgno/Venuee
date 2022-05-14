const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Reservation extends Model {}
Reservation.init({
  reserveDate: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'date is missing'
      }
    }
  },
  partySize: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: {
        args: 1,
        msg: 'party size must be bigger than 0'
      }
    }
  }
}, { sequelize, modelName: 'reservation', timestamps: false });


module.exports = Reservation;