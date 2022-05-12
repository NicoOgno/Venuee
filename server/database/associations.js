const User = require('./models/User');
const Vendor = require('./models/Vendor');
const Reservation = require('./models/Reservation');

User.hasMany(Reservation, { as: 'userReserve', foreignKey: 'confirmationId' });

Reservation.belongsTo(User, { as: 'userRes', foreignKey: 'confirmationId' });

Vendor.hasMany(Reservation, { as: 'vendorReserve', foreignKey: 'reserveId' });

Reservation.belongsTo(Vendor, { as: 'reserve', foreignKey: 'reserveId' })