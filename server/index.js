const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

const sequelize = require('./database/db');
const { userRouter } = require('./routes/user');
const { vendorRouter } = require('./routes/vendor');
const { reservationRouter } = require('./routes/reservation');
const db = require('./database/associations');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter);
app.use('/vendor', vendorRouter);
app.use('/reservation', reservationRouter);

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);

  sequelize
    .sync({ force: false })
    .then(() => {
      console.log('Database connected!');
    })
    .catch((error) => {
      console.error(error);
    });
});
