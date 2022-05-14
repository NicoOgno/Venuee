const User = require('./models/User');
const Vendor = require('./models/Vendor');
const Reservation = require('./models/Reservation');

User.hasMany(Reservation, { as: 'userReserve', foreignKey: 'userId' });

Reservation.belongsTo(User, { as: 'userInfo', foreignKey: 'userId' });

Vendor.hasMany(Reservation, { as: 'vendorReserve', foreignKey: 'vendorId' });

Reservation.belongsTo(Vendor, { as: 'vendorInfo', foreignKey: 'vendorId' })