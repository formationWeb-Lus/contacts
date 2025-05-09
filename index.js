const express = require('express');
const { connectToDatabase } = require('./db/conn');
const contactsRoutes = require('./routes/contacts');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('Hello World from Contacts API!');
});

// Route pour les contacts
app.use('/contacts', contactsRoutes);

// Connexion à la base de données, puis démarrage du serveur
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
