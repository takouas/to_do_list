const mongoose = require("mongoose");
// const Joi = require("joi");
const Joi = require('@hapi/joi');
const tache_schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  finished: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  finishedAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
});

// validation update tache
let Tache_validation_update = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().max(300),
  finished: Joi.boolean(),
  createdAt: Joi.date().toLocaleString(),
  finishedAt: Joi.date().toLocaleString(),
  updatedAt: Joi.date().toLocaleString(),
});
const Tache = mongoose.model("Tache", tache_schema);

module.exports = {
  Tache: Tache,
  Tache_validation_update: Tache_validation_update,
};
