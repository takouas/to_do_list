const bcrypt = require('bcryptjs')
const {
  User,
} = require("../models/userModel");
//get all user
exports.getUser = (async (req, res) => {

    res.send(await User.find())
})





