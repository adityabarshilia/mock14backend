const express = require("express");
const ScoreModel = require("../models/score.model");
const app = express.Router();

app.post("/", async (req, res) => {

  const { name, level, score } = req.body;

  try {
    let newScore = await ScoreModel.create({ name, level, score});
    res.status(201).send(newScore);
  } catch (error) {
    res.status(400).send(error)
  }
});

app.get("/", async (req, res) => {
  
    try {
      let scores = await ScoreModel.find({});
      res.status(200).send(scores);
    } catch (error) {
      res.status(400).send(error)
    }
  });

module.exports = app;
