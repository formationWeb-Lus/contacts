const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db('contacts');
    console.log('🟢 Connexion à MongoDB réussie');
  } catch (err) {
    console.error('❌ Erreur de connexion à MongoDB :', err);
  }
}

function getDb() {
  return db;
}

module.exports = { connectToDatabase, getDb };
