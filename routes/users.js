const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../data/users.json"), (err, data) => {
    if (err) {
      res.status(400).send({ message: "Users file not found" });
      return;
    }
    res.send(data.toString());
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile(path.join(__dirname, "../data/users.json"), (err, data) => {
    if (err) {
      res.status(400).send({ message: "Users file not found" });
      return;
    }
    let currentUser = null;
    JSON.parse(data).map((user) => {
      if (user._id === id) {
        currentUser = user;
      }
    });
    if (!currentUser) {
      res.send({ message: "User ID not found" });
      return;
    }
    res.send(currentUser);
  });
});

module.exports = router;
