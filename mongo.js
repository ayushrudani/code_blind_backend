const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
// Connection URL
const uri = process.env.MONGO_URI;

// Create a new MongoClient
const client = new MongoClient(uri);

async function connect() {
  try {
    // Connect the client to the server
    await client.connect();
    return client.db();
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas", err);
    throw err;
  }
}

module.exports = { connect };
