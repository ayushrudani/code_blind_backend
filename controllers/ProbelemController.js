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
const ProblemController = {
  getAllProblem: async (req, res) => {
    try {
      const problems = await db.collection("problems").find().toArray();
      return res.status(200).json(problems);
    } catch (err) {
      console.error("Error fetching all problems", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  getProblemByID: async (req, res) => {
    try {
      const problemId = req.body.problemId;
      const problem = await db.collection("problems").findOne({ problemId });
      if (!problem) {
        return res.status(404).json({ error: "Problem not found" });
      }
      return res.status(200).json(problem);
    } catch (err) {
      console.error("Error fetching problem by ID", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  deleteProblem: async (req, res) => {
    try {
      const problemId = req.body.problemId;
      const problem = await db.collection("problems").deleteOne({ problemId });

      if (!problem) {
        return res.status(404).json({ error: "Problem not found" });
      }
      return res.status(200).json(problem);
    } catch (err) {
      console.error("Error fetching problem by ID", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  createProblem: async (req, res) => {
    try {
      const problem = req.body;
      const result = await db.collection("problems").insertOne(problem);
      return res.status(200).json(result);
    } catch (err) {
      console.error("Error creating problem", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  editProblem: async (req, res) => {
    try {
      const problemId = req.body.problemId;
      const problem = req.body;
      // update all fields except problemId and _id
      delete problem.problemId;
      delete problem._id;
      const result = await db
        .collection("problems")
        .updateOne({ problemId }, { $set: problem });
      return res.status(200).json(result);
    } catch (err) {
      console.error("Error editing problem", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
};

module.exports = ProblemController;
