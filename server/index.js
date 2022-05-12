const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const sequelize = require('./database/db');
const { router } = require('./routes/index');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(router);

app.listen(PORT, () => { console.log(`Server started at port ${PORT}`);

  sequelize.sync({force: false}).then(() => {
    console.log('Database connected!')
  }).catch( error => {
    console.error(error);
  })
});