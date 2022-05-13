const sequelize = require('./database/db');
const User = require('./database/models/User');
const Vendor = require('./database/models/Vendor');
const Reservation = require('./database/models/Reservation');
const db = require('./database/associations');

const users = [
  {userName: "RickT1989", email: "rik@msic.tv", password: "livinlavidaloca", company: "Group Tech", userImg: "urlxxxxxxxx"},
  {userName: "PeterP", email: "pp@bowery.com", password: "secretpass", company: "Bowery CO.", userImg: "urlxxxxxx"},
  {userName: "EliodorSkinner", email: "eskinner@shouse.biz", password: "anothersecret", company: "Swift house", userImg: "urlxxxxx"},
  {userName: "JDolittle", email: "dolittle@pets.com", password: "lastsecret", company: "Pets 4 life", userImg: "urlxxx"}
];

const vendors = [
  {businessName: "Real Food", email: "real@foods.com", password: "myunrealfood", streetAddress: "rstreet", city: "rcity", state: "rstate", zipCode: "97021", maxCapacity: "45", "type": "lounge"},
  {businessName: "Piccolo Sogno", email: "psogno@psogno.com", password: "greatestsecret", streetAddress: "pstreet", city: "pcity", state: "pstate", zipCode: "97021", maxCapacity: "15", "type": "banquet hall"},
  {businessName: "Tropical Pizza", email: "tropical@pizza.com", password: "pinapplepizza", streetAddress: "tstreet", city: "tcity", state: "tstate", zipCode: "97211", maxCapacity: "25", "type": "bar"},
  {businessName: "Big Barbecue", email: "bb@bbarbecue.com", password: "brutalbarbecues", streetAddress: "bstreet", city: "bcity", state: "bstate", zipCode: "97211", maxCapacity: "100", "type": "restaurant"}
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