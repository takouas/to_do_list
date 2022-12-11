const { Tache, Tache_validation_update } = require("../models/todoModel");

// get All Tache
exports.getTache = async (req, res) => {
  res.send(await Tache.find());
};
// add Tache to DB
exports.postTache = async (req, res) => {
  new Tache(req.body).save().then(() => res.send("sended data"));
};
//update Tache
exports.putTache = async (req, res) => {
  try {
    let results = Tache_validation_update.validate(req.body);
    if (results.error)
      return res.status(400).send(results.error.details[0].message);
    await Tache.updateOne({ _id: req.params.id }, req.body);
    res.send(await Tache.findById(req.params.id));
  } catch (error) {
    res.status(400).send("Error updating Tache :" + error.message);
  }
};
// delete Tache
exports.deleteTache = async (req, res) => {
  try {
    let tache = await Tache.findOneAndDelete({ _id: req.params.id });
    if (!tache) return res.status(404).send(" Tache with id is not found");
    res.send(tache);
  } catch (error) {
    res.status(400).send("Error Deleting  Tache :" + error.message);
  }
};

exports.updateFinished = async (req, res) => {
  try {
    let tache = await Tache.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        finished: req.body.finished
      }
    );
    if (!tache) return res.status(404).send(" Tache with id is not found");
    res.send(tache);
  } catch (error) {
    res.status(400).send("Error update  Tache :" + error.message);
  }
};
