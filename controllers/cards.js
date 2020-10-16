const Card = require("../models/card");
const { setErrorDetails } = require("../utils/utils");

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const constdeleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const likeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

const dislikeCard = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      const { status, message } = setErrorDetails(err);
      res.status(status).send({ message });
    });
}

module.exports = { getCards, deleteCard, createCard, likeCard, dislikeCard };
