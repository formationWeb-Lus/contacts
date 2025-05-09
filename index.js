const express = require('express');
const app = express();
require('dotenv').config();

const { connectToDatabase } = require('./db/conn');
connectToDatabase();

const contactsRoutes = require('./routes/contacts');
app.use('/contacts', contactsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
