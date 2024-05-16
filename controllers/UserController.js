// UserController.js
const { connect } = require("../mongo");

let db;

// Connect to MongoDB
connect()
  .then((database) => {
    db = database;
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  });

// Define the controller methods
const UserController = {
  getUserByUsername: async (req, res) => {
    const username = decodeURIComponent(req.body.username); // Decode from URL
    const user = await db.collection("users").findOne({ username });
    res.send(user);
  },
};

module.exports = UserController;
