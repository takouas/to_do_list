const express = require("express");
const route = express.Router();

const {
  getUser,
} = require("../controllers/userController");

route.get("/", getUser);


module.exports = route;
