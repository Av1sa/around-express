const User = require("../models/user");
const { setErrorDetails } = require("../utils/utils");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const getUser = (req, res) => {
  User.findById(req.params.userId)
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  console.log(req.user._id);
  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true }
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    { new: true, runValidators: true }
  )
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

module.exports = { getUsers, getUser, createUser, updateProfile, updateAvatar };
