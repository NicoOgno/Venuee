const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db');

class Vendor extends Model {}
Vendor.init({
    businessName: {
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
    streetAddress: {
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
    city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
            msg: 'field city is missing'
            },
            len: {
            args: [2, 50],
            msg: 'city length must be between 2 and 50 characters'
            }
        }
    },
        state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
            msg: 'field state missing'
            },
            len: {
            args: [6, 150],
            msg: 'state must be at least 6 characters'
            }
        }
    },
    zipCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
            msg: 'field zip code missing'
            }
        }
    },
    maxCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
            msg: 'field max capacity is missing'
            },
            min: {
            args: 1,
            msg: 'capacity must be bigger than 0'
            }
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
            msg: 'type field missing'
            }
        }
    },
    vendorImg: {
    type: DataTypes.STRING,
    allowNull: false,
    }
}, { sequelize, modelName: 'vendor', timestamps: false });


module.exports = Vendor;