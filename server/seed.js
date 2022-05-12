const sequelize = require('./database/db');
const User = require('./database/models/User');
const Vendor = require('./database/models/Vendor');
const Reservation = require('./database/models/Reservation');
const db = require('./database/associations');

const users = [
  {name: "Rick", lastName: "Lotin", company: "Group Tech", email: "rik@msic.tv", password: "livinlavidaloca"},
  {name: "Peter", lastName: "Pana", company: "Bowery CO.", email: "pp@bowery.com", password: "secretpass"},
  {name: "Eliodor", lastName: "Skinner", company: "Swift house", email: "eskinner@shouse.biz", password: "anothersecret"},
  {name: "John", lastName: "Dolittle", company: "Pets 4 life", email: "dolittle@pets.com", password: "lastsecret"}
];

const vendors = [
  {vendorName: "Real Food", email: "real@foods.com", password: "myunrealfood", address: "rstreet, rcity, rstate, rzipcode", capacity: "45"},
  {vendorName: "Piccolo Sogno", email: "psogno@psogno.com", password: "greatestsecret", address: "psstreet, pscity, psstate, pszipcode", capacity: "15"},
  {vendorName: "Tropical Pizza", email: "tropical@pizza.com", password: "pinapplepizza", address: "tstreet, tcity, tstate, tzipcode", capacity: "25"},
  {vendorName: "Big Barbecue", email: "bb@bbarbecue.com", password: "brutalbarbecues", address: "bstreet, bcity, bstate, bzipcode", capacity: "100"}
];

const reservations = [
  {reserveDate: new Date('December 10, 2022 13:00:00'), partySize: 5, confirmationId: 1, reserveId: 1 },
  {reserveDate: new Date('September 7, 2022 17:30:00'), partySize: 50, confirmationId: 2, reserveId: 3 },
  {reserveDate: new Date('November 1, 2022 10:30:00'), partySize: 10, confirmationId: 3, reserveId: 2 },
  {reserveDate: new Date('December 17, 2022 13:30:00'), partySize: 25, confirmationId: 4, reserveId: 4 }
];

sequelize.sync({ force: false }).then(() => {
  // Conexión establecida
  console.log("Conexión establecida...");
}).then(async () => {
  // Rellenar usuarios
  for (let i = 0; i < users.length; i++) {
    await User.create(users[i]);
  };
  for (let i = 0; i < vendors.length; i++){
    await Vendor.create(vendors[i]);
  };
  for ( let i = 0; i < reservations.length; i++){
    await Reservation.create(reservations[i]);
  };

});