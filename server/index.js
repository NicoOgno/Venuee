const express = require('express');
const app = express();
require('dotenv').config();

const sequelize = require('./database/db');
const { router } = require('./routes/index');
const db = require('./database/associations');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => { console.log(`Server started at port ${PORT}`);

  sequelize.sync({force: false}).then(() => {
    console.log('Database connected!')
  }).catch( error => {
    console.error(error);
  })
});