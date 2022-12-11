const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv/config");
const { User, user_validation } = require("../models/userModel");

//register
exports.register = async (req, res) => {
  // validate the data before we save a user
  const { error } = user_validation.validate(req.body);
  console.log(req.body);
  // res.send(validation);
  if (error) return res.status(400).send(error.details[0].message);
  // checking if the user is already in the database
  const userExist = await User.findOne({ email: req.body.email });
  if (userExist) return res.status(400).send("email already exists");
  // create a new user
  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);
  user.save();
  res.send({ user });
};

//login
exports.login = async (req, res) => {
  // checking if the email and password are exists in the database
  const userExist = await User.findOne({ email: req.body.email });
  console.log("userExist", userExist);
  if (userExist != null) {
    console.log("req.body.email", req.body.email);
    console.log("req.body.email", req.body.password);
    const validPass = await bcrypt.compare(
      req.body.password,
      userExist.password
    );
    // checking if password is correct
    if (!validPass) {
      res.status(400).send("invalid password");
    }
    // create and assign a token
    const token = jwt.sign({ user: userExist }, process.env.TOKEN_SECRET);
    const email = userExist.email;
    const data = { data: email, token: token };
    res.send(data);
    console.log("userlogin", token);
    console.log("data", data);
  } else {
    res.send({ error: "email or password is invalid" });
  }
};
