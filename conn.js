const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let _db;

async function connectToDatabase() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  _db = client.db('contactsDB'); // nom de ta base
  console.log('✅ Connected to MongoDB');
}

function getDb() {
  if (!_db) {
    throw new Error('Database not connected!');
  }
  return _db;
}

module.exports = { connectToDatabase, getDb };
