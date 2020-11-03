const mongoose = require("mongoose");
// const { regex } = require("../utils/utils");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: "Jacques Cousteau",
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    default: "Explorer",
  },
  avatar: {
    type: String,
    validate: {
      validator: (link) => validator.isURL(link),
    },
    default: "https://pictures.s3.yandex.net/resources/avatar_1604080799.jpg",
  },
});

module.exports = mongoose.model("user", userSchema);
