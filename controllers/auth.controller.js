const UserModel = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  const { firstName, lastName, email, password, dateOfBirth } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(200).send({ err });
  }
};
