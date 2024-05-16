const { MongoClient } = require("mongodb");

// Connection URL
const uri =
  "mongodb+srv://ayush:ayush@cluster0.dy9mm.mongodb.net/code-blind?retryWrites=true&w=majority&appName=Cluster0&useUnifiedTopology=true";

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
