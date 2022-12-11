const express = require("express");
const route = express.Router();

const {
  getTache,
  postTache,
  putTache,
  deleteTache,
  updateFinished
} = require("../controllers/todoController");

route.get("/", getTache);
route.post("/", postTache);
route.delete("/:id", deleteTache);
route.put("/:id", putTache);
route.put("/finished/:id", updateFinished);
module.exports = route;
