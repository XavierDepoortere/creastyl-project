const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    requiered: true,
    minlength: 2,
    maxlength: 55,
  },
  lastName: {
    type: String,
    requiered: true,
    minlength: 2,
    maxlength: 55,
  },
  email: {
    type: String,
    requiered: true,
    validate: [isEmail],
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    requiered: true,
    maxlength: 1024,
    minlength: 6,
  },
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
});

const UserModel = mongoose.model("user", userSchema); //exportation user model
module.exports = UserModel;
