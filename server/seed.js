const sequelize = require("./database/db");
const User = require("./database/models/User");
const Vendor = require("./database/models/Vendor");
const Reservation = require("./database/models/Reservation");
const db = require("./database/associations");

const users = [
  {
    userName: "RickT1989",
    email: "rik@msic.tv",
    password: "livinlavidaloca",
    company: "Group Tech",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/charlie.jpg?alt=media&token=d0ff7fa7-66fe-4088-94fb-6277663b44e9",
  },
  {
    userName: "PeterP",
    email: "pp@bowery.com",
    password: "secretpass",
    company: "Bowery CO.",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/max.jpg?alt=media&token=b271f445-2cfa-4e00-a29e-83ee2df9476f",
  },
  {
    userName: "EliodorSkinner",
    email: "eskinner@shouse.biz",
    password: "anothersecret",
    company: "Swift house",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/dee.jpg?alt=media&token=27828acb-591a-4a44-819b-c0c5a2054a60",
  },
  {
    userName: "JDolittle",
    email: "dolittle@pets.com",
    password: "lastsecret",
    company: "Pets 4 life",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/venuee-41927.appspot.com/o/dennis.jpg?alt=media&token=2c5c2a6a-91d9-4ccb-b236-3c15717ab617",
  },
];

const vendors = [
  {businessName: "Nostrana", email: "events@nostrana.com", password: "realfood", streetAddress: "1132 NW Alder St", city: "Portland", state: "Oregon", zipCode: "97204", maxCapacity: "100", type: "bar", vendorImg: "url111"},
  {businessName: "Piccolo Sogno", email: "psogno@psogno.com", password: "abigsecret", streetAddress: "1167 NW Elm Ave", city: "Portland", state: "Oregon", zipCode: "97204", maxCapacity: "20", type: "bar", vendorImg: "url222"},
  {businessName: "Tropical Pizza", email: "tropical@pizza.com", password: "pinapplepizza", streetAddress: "1245 NW Burnside St", city: "Portland", state: "Oregon", zipCode: "97204", maxCapacity: "70", type: "bar", vendorImg: "url333"},
  {businessName: "Big Barbecue", email: "bb@bbarbecue.com", password: "brutalbarbecue", streetAddress: "1988 NW Everett St", city: "Portland", state: "Oregon", zipCode: "97204", maxCapacity: "100", type: "restaurant", vendorImg: "url444"},
  {businessName: "Doug Fir Lounge", email: "events@dougfir.com", password: "eatburgers", streetAddress: "801 SE Burnside Ave", city: "Portland", state: "Oregon", zipCode: "97214", maxCapacity: "80", type: "restaurant", vendorImg: "url555" },
  {businessName: "Harlow", email: "events@harlow.com", password: "harlow2022", streetAddress: "3710 SE Belmont St", city: "Portland", state: "Oregon", zipCode: "97214", maxCapacity: "50", type: "restaurant", vendorImg: "url666" },
  {businessName: "Opal28", email: "events@opal.com", password: "opal2022", streetAddress: "900 SW Lovejoy Ave", city: "Portland", state: "Oregon", zipCode: "97214", maxCapacity: "20", type: "bar", vendorImg: "url777" },
];

const reservations = [
  {
    reserveDate: new Date("June 10, 2022 13:00:00"),
    partySize: 10,
    userId: 1,
    vendorId: 1,
  },
  {
    reserveDate: new Date("June 10, 2022 17:30:00"),
    partySize: 20,
    userId: 1,
    vendorId: 2,
  },
  {
    reserveDate: new Date("June 12, 2022 10:30:00"),
    partySize: 50,
    userId: 1,
    vendorId: 3,
  },
  {
    reserveDate: new Date("June 15, 2022 13:30:00"),
    partySize: 80,
    userId: 1,
    vendorId: 4,
  },
  {
    reserveDate: new Date("June 16, 2022 13:30:00"),
    partySize: 40,
    userId: 1,
    vendorId: 5,
  },
  {
    reserveDate: new Date("June 20, 2022 13:30:00"),
    partySize: 30,
    userId: 1,
    vendorId: 6,
  },
  {
    reserveDate: new Date("June 10, 2022 13:00:00"),
    partySize: 10,
    userId: 2,
    vendorId: 1,
  },
  {
    reserveDate: new Date("June 14, 2022 17:30:00"),
    partySize: 100,
    userId: 3,
    vendorId: 1,
  },
  {
    reserveDate: new Date("June 15, 2022 10:30:00"),
    partySize: 50,
    userId: 4,
    vendorId: 1,
  },
  {
    reserveDate: new Date("June 16, 2022 13:30:00"),
    partySize: 80,
    userId: 5,
    vendorId: 1,
  },
  {
    reserveDate: new Date("June 19, 2022 13:30:00"),
    partySize: 40,
    userId: 6,
    vendorId: 1,
  },
  {
    reserveDate: new Date("June 20, 2022 13:30:00"),
    partySize: 30,
    userId: 7,
    vendorId: 1,
  },
];


sequelize.sync ({ force: true }).then(() => {
}).then(async () => {
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

