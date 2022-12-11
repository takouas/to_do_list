const mongoose = require("mongoose");
// const Joi = require("joi");
const Joi = require('@hapi/joi');
let user_schema = new mongoose.Schema({
  firstName: { type: String, required: true, min: 2, max: 255 },
  lastName: { type: String, required: true, min: 2, max: 255 },
  email: { type: String, require: true,unique: true,min: 3, },
  phone: { type: String, required: true, min: 6, max: 255 },
  password:{ type: String, required: true, min: 6, max: 255 },
  
});

// Register validation

const user_validation = Joi.object({ 
      firstName: Joi.string().min(2).max(255).required(),
      lastName: Joi.string().min(2).max(255).required(),
      email: Joi.string().email().min(3).required(),
      phone:Joi.string().min(6).required(),
      password: Joi.string().min(6).max(255).required(),  });
  
let User = mongoose.model("User", user_schema);

module.exports = {
  User: User,
  user_validation: user_validation,
};
