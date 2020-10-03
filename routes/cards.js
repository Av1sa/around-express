const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../data/", "cards.json"), (err, data) => {
    if (err) {
      res.status(500).send({ message: "Cards file not found" });
      return;
    }
    res.send(data.toString());
  });
});

module.exports = router;
