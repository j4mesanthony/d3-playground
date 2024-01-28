require('dotenv').config()

const { sequelize } = require('./models');
const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to db and sync models
sequelize.sync()
.then(() => console.log('Connected to database'))
.catch((err) => console.log(err));

// Route definitions
const peopleRoutes = require('./routes/people');

app.use(express.json());
app.use(cors());
app.use('/people', peopleRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));