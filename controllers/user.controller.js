const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find().select("-password"); //('-password') permet de ne pas renvoyer me mpd
  res.status(200).json(users);
};

module.exports.userInfo = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  UserModel.findById(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else console.log("ID unknown :" + err);
  }).select("-password");
};

module.exports.updateUser = async (req, res) => {
  // Vérifier que l'ID fourni dans la requête est valide
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send("ID unknown : " + req.params.id);
  }

  // Vérifier que l'adresse email fournie dans la requête est valide
  if (req.body.email) {
    if (!isEmail(req.body.email)) {
      return res.status(400).send("Invalid email : " + req.body.email);
    }
  }
  let passwordTemp = null;
  const salt = await bcrypt.genSalt();
  if (req.body.password) {
    passwordTemp = req.body.password;
    password = await bcrypt.hash(passwordTemp, salt);
  }
  try {
    let updateObject = {};
    if (req.body.lastName) updateObject.lastName = req.body.lastName;
    if (req.body.email) updateObject.email = req.body.email;
    if (password) updateObject.password = password;

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updateObject },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    // Renvoyer le document utilisateur mis à jour
    res.send(updatedUser);
  } catch (err) {
    // Gestion des erreurs
    res.status(500).json({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    await UserModel.remove({ _id: req.params.id }).exec();
    res.status(200).json({ message: "Successfully deleted." });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
